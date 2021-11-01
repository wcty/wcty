import { createClient } from "nhost-js-sdk";

const origin = window.location.origin

export const endpoint = 
  origin === 'http://localhost:3000' ? 'https://api-local.weee.city':
  origin === 'https://dev.weee.city' ? 'https://api-dev.weee.city':
  'https://api.weee.city'

export const { auth, storage } = createClient({
  baseURL: endpoint,
  useCookies: true
});

export * from './NhostApolloProvider'
