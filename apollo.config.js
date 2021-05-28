require('dotenv').config();

module.exports = {
  client: {
    service: {
      name: 'wcty',
      url: 'https://hasura-aws.weee.city/v1/graphql',
      // optional headers
      headers: {
        "X-Hasura-Admin-Secret": `${process.env.HASURA_ADMIN}`,
        "X-Hasura-Role": "user"      
      }
    },
    includes: ["src/misc/graphql/*.{ts,tsx,js,jsx,graphql}"]
  }
}