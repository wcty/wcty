global.fetch = require('node-fetch');
const fs =require('fs')

fetch("https://tiles.weee.city/index.json")
  .then(d=>d.json())
  .then(d=>fs.writeFile('src/generated/tilespecs.json', JSON.stringify(d, null, 2), { flag: 'w' }, err => {}))
