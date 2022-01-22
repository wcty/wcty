import { ApolloClient, InMemoryCache } from '@apollo/client';

export {default as cacheConfig} from './cacheConfig';

export const graphqlUrl = "https://gql.weee.city/v1/graphql";

export const client = new ApolloClient({
  ssrMode: true,
  uri: graphqlUrl,
  cache: new InMemoryCache(),
})
