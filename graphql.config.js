require('dotenv').config();

module.exports = {
  projects: {
    admin: {
      schema: "apps/admin/src/generated/graphql.schema.json",
      documents: [
        "apps/admin/src/**/*.graphql",
        "apps/admin/src/**/**/*.graphql",
        "apps/admin/src/**/**/**/*.graphql",
        "apps/admin/src/**/**/**/**/*.graphql"
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'https://gql.weee.city/v1/graphql',
            headers: {
              "X-Hasura-Admin-Secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
            }
          },
        },
      },
    },
    fe: {
      schema: "apps/fe/src/generated/graphql.schema.json",
      documents: [
        "apps/fe/src/**/*.graphql",
        "apps/fe/src/**/**/*.graphql",
        "apps/fe/src/**/**/**/*.graphql",
        "apps/fe/src/**/**/**/**/*.graphql"
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'https://gql.weee.city/v1/graphql',
            headers: {
              "X-Hasura-Admin-Secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
              "X-Hasura-Role": "user"   
            }
          },
        },
      },
    },
  },
}