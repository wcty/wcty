require('dotenv').config();

module.exports = {
  projects: {
    gsttf: {
      schema: "src/generated/graphql.schema.json",
      documents: [
        "src/**/*.graphql",
        "src/**/**/*.graphql",
        "src/**/**/**/*.graphql",
        "src/**/**/**/**/*.graphql"
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'https://hasura-aws.weee.city/v1/graphql',
            headers: {
              "X-Hasura-Admin-Secret": `${process.env.HASURA_ADMIN}`,
              "X-Hasura-Role": "user"   
            }
          },
        },
      },
    },
  },
}