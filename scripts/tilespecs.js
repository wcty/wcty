global.fetch = require('node-fetch');
const fs =require('fs')

fetch("https://tiles.weee.city/index.json")
  .then(d=>d.json())
  .then(d=>{
    const data = Object.entries(d)
      .sort(function(a, b) {
        var nameA = a[0].toUpperCase(); // ignore upper and lowercase
        var nameB = b[0].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;}
        if (nameA > nameB) {
          return 1;}
        return 0;
      })
      .reduce((agg,v)=>({...agg, [v[0]]:v[1]}), {})
    fs.writeFile('src/generated/tilespecs.json', JSON.stringify(data, null, 2), { flag: 'w' }, err => {})
  })
