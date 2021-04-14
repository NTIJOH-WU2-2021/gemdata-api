var merge = require('deepmerge');
const fs = require('fs');
const { Parser } = require('json2csv');

const arr = [];

fs.readdirSync("gems/").forEach((file) => {
  arr.push(JSON.parse(fs.readFileSync("gems/" + file, {encoding:'utf8', flag:'r'})));
})

const keys = [...new Set([].concat(...arr.map((m) => Object.keys(m))))];
console.log(keys);
const result = arr.reduce((acc, obj) => {
   keys.forEach((key) => {
      if (key in obj) {
         if (key in acc)
         { acc[key].push(obj[key]) }
         else
         { acc[key] = [obj[key]] }
      } else {
         if (key in acc)
         { acc[key].push("N/A") }
         else
         { acc[key] = ["N/A"] }
      }
   })
   return acc;
}, {})

var json =result[Object.keys(result)[0]].reduce((a,b,i)=>{
   var newObj={};
   Object.keys(result).forEach(function(item){
      newObj[item]=result[item][i];
   });
   return a.concat(newObj);
 },[]);

const json2csvParser = new Parser({ delimiter: ',' });
const csv = json2csvParser.parse(json);

fs.writeFileSync('gem_database.csv',/* "\ufeff" + */csv, "utf8");
