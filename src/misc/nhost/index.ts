import { createClient } from "nhost-js-sdk";

const origin = window.location.origin
console.log(origin)

export const endpoint = 
  origin === 'http://localhost:3000' ? 'https://api-local.weee.city':
  origin === 'https://dev.weee.city' ? 'https://api-dev.weee.city':
  'https://api.weee.city'

const client = createClient({
  baseURL: endpoint,
});

export const { auth, storage } = client;
