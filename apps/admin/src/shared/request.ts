import { APPLICATION } from './config'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from '@generated/graphql'

const client = new GraphQLClient(APPLICATION.HASURA_ENDPOINT, {
  get headers() {
    return APPLICATION.HASURA_GRAPHQL_ADMIN_SECRET
      ? { 'x-hasura-admin-secret': APPLICATION.HASURA_GRAPHQL_ADMIN_SECRET }
      : undefined
  }
})

export const request = getSdk(client)
