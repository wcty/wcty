global.fetch = require('node-fetch');
require('dotenv').config()
const { ApolloClient, gql, InMemoryCache } = require('@apollo/client');
const upload = require('./upload_file.js');
const JSONtoGraphQL = require('json-to-graphql-query')
const initiatives = require('./initiatives/initiatives_mapped.json')
const formatDate = (epoch)=> new Date(Number(epoch)).toISOString();

const initiatives_updated = initiatives.map(({initiative_info,...i}) => ({
  ...i,
  geom: JSON.stringify(i.geom).replace(/\\"/g, '"')
    .replace(/([\{|:|,])(?:[\s]*)(")/g, "$1'")
    .replace(/(?:[\s]*)(?:")([\}|,|:])/g, "'$1")
    .replace(/([^\{|:|,])(?:')([^\}|,|:])/g, "$1\\'$2"),
  infos:{data:[{
    ...i.infos.data[0],
    user_id: i.members.data[0] && i.members.data[0].user_id || null
  }]}
}))
//.slice(1,2) error
//.slice(22,23) error

const unquoted = JSON.stringify(initiatives_updated, null, 2).replace(/"([^"]+)":/g, '$1:');

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: 'https://hasura-aws.weee.city/v1/graphql',
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN
  },
})

const queryString = `
  mutation InsertInitiatives {
    insert_initiatives(objects: ${unquoted}) {
      affected_rows
    }
  }
`;
console.log(queryString);

const insertInitiatives = gql`${queryString}`
client.mutate({
    mutation: insertInitiatives,
}).then(result => console.log(result))
