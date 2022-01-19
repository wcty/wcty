global.fetch = require('node-fetch');
global.FormData = require('form-data');
const axios = require('axios');
const fs = require("fs");
const { ApolloClient, gql, InMemoryCache } = require('@apollo/client');
const endpoint = 'https://api-local.weee.city'
require('dotenv').config()

const storage = {
  put: async function(file_path, file_directory) {
    let data = new FormData();
    data.append('file', fs.createReadStream(file_directory));
    
    let config = {
      method: 'post',
      url: endpoint + "/storage/o" + file_path,
      headers: { 
        ...data.getHeaders(),
        "X-Hasura-Admin-Secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET
      },
      data : data
    };
    
    try{
      const response = await axios(config)
      console.log('response: ', response.statusText||'NOT OK')
    }catch(err){
      console.log('error: ', err)
    }
  }
}

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: 'https://hasura-aws.weee.city/v1/graphql',
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET
  },
})

const InsertFileDocument = gql`
  mutation insertFile($file: files_insert_input!) {
    insert_files_one(object: $file) {
      id
    }
}`;


const insertFile = function({variables}){
  client.mutate({
    mutation: InsertFileDocument,
    variables,
    headers:{
      "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET
    }
  })
}

async function upload({initiative, user, file_name, file_directory, gql=true}) {
    console.log('params: ', initiative, user, file_name, file_directory, gql)
    const file_path = `/public/initiatives/${initiative}/${file_name}`;

    const downloadable_url = `https://api.weee.city/storage/o${file_path}`;

    await storage.put(file_path, file_directory)
    if(gql){
      await insertFile({
        variables: {
          file: {
            file_path,
            downloadable_url,
            user_id: user,
            initiative_id: initiative
          },
        },
      });
    }

    return {file_path, downloadable_url}
}


// upload({
//   initiative: '1c8d93a0-e221-11ea-8a2a-db0e511538ef', 
//   user: '1c8d93a0-e221-11ea-8a2a-db0e511538ef', 
//   file_name: '1c8d93a0-e221-11ea-8a2a-db0e511538ef_1920x1080.jpg', 
//   file_directory: "./migration/initiatives/images/0bd0f501-6f94-48d3-a3ba-873e12e8c390.jpg",
//   gql: false
// });
 
module.exports = upload;