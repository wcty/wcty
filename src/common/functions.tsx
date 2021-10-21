import { NearbyEntriesQuery } from "generated";

export function toSelected(entry:NearbyEntriesQuery['entries_nearby'][number]){
  return {
    id: entry?.id,
    geometry: entry?.geometry,
    source: entry?.type||'',
    type: 'Feature',
    properties:{
      id: entry?.id,
      name: entry?.name||'',
      created_at: entry?.created_at,
      description: entry?.description||'',
      image: entry?.image||'',
      members: entry?.members_count,
      members_count: entry?.members_count,
      modified_at: entry?.modified_at,
      type: entry?.type
    }
  } as const
}
