import { css as css_, ThemedCssFunction } from 'styled-components';

export const css = css_ as ThemedCssFunction<{}>;

// export const css = (strings:TemplateStringsArray, ...args:string[]) => {
//   const result = [];
//   for(let i = 0; i < strings.length; i++) {
//     result.push(strings[i]);
//     if(args?.[i]) result.push(args[i]);
//   }
//   console.log(result.join(''))
//   return result.join('');
// }
