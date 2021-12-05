import { InMemoryCacheConfig } from "@apollo/client";

export default {
  typePolicies: {
    Query: {
      fields:{
        entries_nearby: {
          keyArgs: ['type'],
          merge(existing, incoming, { args }) {
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[args?.offset + i] = incoming[i];
            }
            return merged;
          },
        },
        i18n:{
          keyArgs: (args,v)=>Object.entries(v.variables||{})
            .reduce((agg,v)=>v[1]?v[0]:agg,'en')
        }
      }
    },
  },
} as InMemoryCacheConfig;
