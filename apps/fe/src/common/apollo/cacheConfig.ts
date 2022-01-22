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
        }
      }
    },
  },
} as InMemoryCacheConfig;
