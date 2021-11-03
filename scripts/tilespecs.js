global.fetch = require('node-fetch');
const fs =require('fs')

function Order(val){
  return Object.entries(val)
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
}

fetch("https://tiles.weee.city/index.json")
  .then(d=>d.json())
  .then(d=>{
    let data = Order(d)
    data = Object.entries(data)
      .map(entry=>{
        return [entry[0], {...entry[1], properties:Order(entry[1].properties)}]
      })

    fs.writeFile('src/generated/tilespecs.json', JSON.stringify(data, null, 2), { flag: 'w' }, err => {})
  })
