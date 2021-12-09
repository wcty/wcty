import { ApolloClient, InMemoryCache } from "@apollo/client";
import { DictionaryDocument, DictionaryQuery, NearbyEntriesQuery } from "generated";
import { GetServerSideProps } from "next";

export * from './push-notifications'
export * from './apn'
export * from './http'

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
      type: entry?.type,
      address: '',
    }
  } as const
}

export function polarToCartesian(centerX:number, centerY:number, radius:number, angleInDegrees:number) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

export function describeArc(x:number=0, y:number=0, radius:number, startAngle:number, endAngle:number){
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  var d = [
    "M", start.x, start.y, 
    "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
  ].join(" ");
  return d;       
}

/** Function to select words in a string by start and end index */
export function selectWords(str:string, start:number, end:number=Infinity){
  if(start > end) return ''
  let words = str.split(' ')
  let selected = words.slice(start, end)
  return selected.join(' ')
}

export const fixAvatar = (url?:string|null) => {
  if(!url) return ''
  const link = url.includes("platform-lookaside.fbsbx")?
    `http://graph.facebook.com/${
      new URL(url).searchParams.get('asid')
    }/picture?type=large&redirect=true&width=50&height=50`:
    url||''
  return link.replace('http://', 'https://')
}
