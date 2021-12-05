global.fetch = require('node-fetch');
const initiatives = require('./initiatives/initiatives_mongo.json')
const users = require('./users/firebase_users_mapped.json')
const { chats } = require('./chats/chats_firebase.json')

const request = require('request');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const formatDate = (epoch)=> new Date(Number(epoch)).toISOString();

var download = async function(uri, filename){
  return new Promise(resolve=> 
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve);
    })
  )
};

const upload = require('./upload_file.js');

const MapUserId = (m)=>{
  const user = users.find(u=>u.localId===m.user.id)
  if(!user) {
    console.log(`User ${m.uid} not found`)
    return m
  }
  return {
    ...m, 
    user_id: user.users_id
  }
}

function GetChats(id){
  
  let chat = chats[id]
  if(!chat || !chat.messages) return []

  const comments = chat.comments|| {}

  const messages = Object.values(chat.messages)
    .filter(m=>m.type==='message')
    .map(MapUserId)
    .map(m=>({
      user_id: m.user_id,
      user_name: m.user.name,
      user_avatar: m.user.avatar,
      created_at: m.timestamp,
      message: m.text,
      ...(comments[m.id]? {
        comments: {
          data: Object.values(comments[m.id])
            .map(MapUserId)
            .map(c=>({
              user_id: c.user_id,
              created_at: c.timestamp,
              message: c.text,
              user_name: c.user.name,
              user_avatar: c.user.avatar,        
            }))
        }
      }: {})
    }))

  return messages
}

function GetTasks(id, members){
  
  let chat = chats[id]
  if(!chat || !chat.messages) return []

  const tasks = Object.values(chat.messages)
    .filter(m=>m.type==='volunteer')
    .map( MapUserId )

  // console.log(tasks)

  const ids = [...new Set(
    [
      ...tasks.map(t=>t.user_id), 
      ...members.filter(m=>m.roles && Object.keys(m.roles)[0]==='Volunteer').map(m=>m.id)
    ]
  )];
  
  const tasks_with_members = {
    data:[{
      description: 'Загальна допомога',
      status: 'IN_PROGRESS',
      volunteers: {
        data: ids.map(id=>({
          user_id: id
        }))
      }
    }]
  }
  return tasks_with_members
}

function GetDonates(id, members){
  
  let chat = chats[id]
  if(!chat || !chat.messages) return []

  const donates = Object.values(chat.messages)
    .filter(m=>m.type==='donate')
    .map(MapUserId)
  
  const ids = [...new Set(
    [
      ...donates.map(t=>t.user_id), 
      ...members.filter(m=>m.roles && Object.keys(m.roles)[0]==='Donator').map(m=>m.id)
    ]
  )];


  const donates_all = ids.map(id=>{
    const donate = donates.find(d=>d.id===id)
    if(!donate){ 
      const user_uid = members.find(u=>u.id===id).uid
      const user = users.find(u=>u.localId===user_uid)
      if(!user) console.log('User not found', id)
      return {
        user_id: id,
        amount: 100,
        created_at: formatDate(user.lastSignedInAt||user.createdAt),
        user_name: user.displayName,
        user_avatar: user.photoUrl,
        recurrent: false,
        //synthetic: true
      }
    }
    return {
      user_id: donate.user.id,
      amount: Number(donate.text.split(',')[0]),
      created_at: donate.timestamp,
      user_name: donate.user.name,
      user_avatar: donate.user.avatar,
      recurrent: donate.text && donate.text.split(',')[1]==='true'
    }
  })

  return donates_all
}

async function MapOneInitiative ({geometry, properties:props}){
  const {
    type,
    imageURL,
    projects,
    members: mlist,
    resources,
    ...properties
  } = props

  let members = mlist
    .sort( (a,b)=>a.roles.Initiator? -1: b.roles.Initiator? 1: 0 )
    // Maybe remove filter
    .filter(m=>{
      return !!users.find(u=>u.localId===m.uid)
    })
    .map(m=>{
      const user = users.find(u=>u.localId===m.uid)
      if(!user) {
        console.log(`User ${m.uid} not found`)
        return {...m}
      }
      return {
        ...m, 
        id: user.users_id, 
        role: Object.keys(m.roles)[0], 
        created_at: formatDate(user.lastSignedInAt||user.createdAt),
        // ...(m.roles.Initiator? {}: {donation: 100})
      }
    })

  const unique_ids = [...new Set(members.map(m=>m.id))];
  members = unique_ids.map(id=>members.find(m=>m.id===id))
  
  try{
    const image_id = uuidv4()
    const initiative_id = uuidv4()
    const first_user = members[0] && members[0].id || null
    const file_directory = `./migration/initiatives/images/${image_id}.jpg`  
    const firebase_id = props.uid;
    
    await download(props.imageURL.l, file_directory);
    console.log(`Downloaded ${file_directory}`)

    //const file_path='path', downloadable_url='url'
    const {file_path, downloadable_url} = await upload({
      initiative: initiative_id, 
      user: first_user, 
      file_name: image_id+'.jpg', 
      file_directory, 
      gql: false
    })
    console.log(`Uploaded ${file_directory}`)

    return ({ 
      geom: geometry, 
      created_at: properties.timestamp.$date||properties.timestamp,
      infos: {
        data: [
          {
            user_id: first_user,
            ...(properties.problem? {problem:  properties.problem.replace(/"/g, '\\"').replace(/\n/g,"\\n") }:{}),
            ...(properties.context? {context:  properties.context.replace(/"/g, '\\"').replace(/\n/g,"\\n") }:{}),
            ...(properties.outcome? {goal:  properties.outcome.replace(/"/g, '\\"').replace(/\n/g,"\\n") }:{})
          }
        ]
      },
      image: downloadable_url,
      name: properties.name.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
      files:{ 
        data:[
          {
            id: image_id, 
            file_path, 
            downloadable_url, 
            user_id: first_user, 
          } 
        ]
      },
      members: {data: members.map(m=>({ 
        user_id: m.id, 
        created_at: m.created_at,
        //uid: m.uid, 
        //role: m.role 
      }))}, 
      ...(GetChats(firebase_id).length>0 ?{posts: {data: GetChats(firebase_id)}}:{}), 
      ...(GetTasks(firebase_id, members).length>0? {tasks: GetTasks(firebase_id, members)}:{}), 
      ...(GetDonates(firebase_id, members).length>0? {donations: {data: GetDonates(firebase_id, members)}}:{}), 
      //firebase_id, 
      id: initiative_id, 
      // initiative_member_id: uuidv4(), 
      // initiative_thread_id: uuidv4(), 
    })
  }catch(e){
    console.log('error: ', e)
  } 
}

(async function MapInitiatives(){
  const initiatives_mapped = []
  for (init of initiatives){
    const initiative = await MapOneInitiative(init)
    initiatives_mapped.push(initiative)
  }

  console.log('length: ',initiatives_mapped.length)
  /// generate account_providers id, accounts id, users id and associate the with firebase ids
  /// replace all firebase initiative users ids with hasura ids
  fs.writeFile('./migration/initiatives/initiatives_mapped.json', JSON.stringify(initiatives_mapped, null, 2), (err,success)=>{if(err){console.log(err)}})

})()