const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { exec } = require("child_process");

const url = 'https://www.gemdat.org/gemindex.php';

function delay(ms) {
   return new Promise(resolve => {
       setTimeout(resolve, ms);
   });
}

function execShellCommand(cmd) {
   const exec = require('child_process').exec;
   return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
     if (error) {
      console.warn(error);
     }
     resolve(stdout? stdout : stderr);
    });
   });
  }

axios(url)
   .then(async (response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const statsTable = $('.fancybox > table a');
      let gemindex = [];

      statsTable.each(function () {
         const href = $(this).attr('href');         

         gemindex.push(href);
      });

      gemindex = gemindex.filter((gem) => +gem.match(/(\d+)/)[1] < 11000);

      console.log(gemindex);
      console.log(gemindex.length);

      for (const gem of gemindex) {
         const ms = Math.floor(Math.random() * 2000);
         console.log("Waiting for " + ms + " ms.")
         await delay(ms); // wait 
         console.log("Processing " + gem)
         output = await execShellCommand("node gemscraper.js " + gem);
         try {
            const json = JSON.parse(output);
            fs.writeFileSync('gems/' + gem.replace('.html', '.json'), JSON.stringify(json, null, 2));
            console.log("Gem " + json['name'] + " is saved.");
         } catch(e) {
            console.log(e);
            console.log("Failed for " + gem);
         }
      }
   })
   .catch(console.error);
