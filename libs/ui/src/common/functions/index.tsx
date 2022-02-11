
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

export const memoize = (func:any) => {
  let cache:any = {};
  return (...args:any) => {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    let result = func(...args);
    cache[key] = result;
    return result;
  };
};

export const insert = (arr:any[], index:number, newItem:any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
]

