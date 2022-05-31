import { config } from 'dotenv'
import { GraphQLClient } from 'graphql-request'
import { getSdk, Roles_Enum, Task_Statuses_Enum } from '../generated/graphql'
config()

const client = new GraphQLClient('https://gql.weee.city/v1/graphql', {
  get headers() {
    return { 'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET||'' }
  }
})

const request = getSdk(client);

(async()=>{
  const initiatives = await request.InitiativesAll()
  const noInitiator = initiatives.initiatives.filter(i => !i.volunteers.find(v=>v.role===Roles_Enum.Initiator))
  console.log(noInitiator.length, initiatives.initiatives.length)
  // console.log(JSON.stringify(noInitiator, null, 2))
  if(noInitiator.length>0){
    const results = await request.AddVolunteers({
      users: noInitiator.map(i=>({
        // initiative_id: i.id,
        role: Roles_Enum.Initiator,
        user_id: i.members[0].user_id,
        task:{data:{
          initiative_id: i.id,
          description: "Create initiative",
          status: Task_Statuses_Enum.Completed,
          created_at: i.members[0].created_at,
          user_id: i.members[0].user_id
        }}
      }))
    })
    console.log(JSON.stringify(results, null, 2))
  }

  const noVolunteers = initiatives.initiatives.filter(i => i.members.find(m=>m.donations.length===0 && m.volunteers.length===0))
  if(noVolunteers.length>0){
    // const results = await request.AddVolunteers({
    //   users: noInitiator.map(i=>({
    //     // initiative_id: i.id,
    //     role: Roles_Enum.Initiator,
    //     user_id: i.members[0].user_id,
    //     task:{data:{
    //       initiative_id: i.id,
    //       description: "Helping the team to develop the initiative",
    //       status: Task_Statuses_Enum.InProgress,
    //       created_at: i.members[0].created_at
    //     }}
    //   }))
    // })
    // console.log(JSON.stringify(results, null, 2))

  }

})()
