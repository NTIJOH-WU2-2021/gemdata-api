let args = process.argv.slice(2);

const axios = require('axios');
const cheerio = require('cheerio');
const he = require('he');
const slugify = require('slugify');

const base = 'https://www.gemdat.org/';

axios(base + args[0])
   .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const gem = {};

      const img_desc_url = base + $('#gemintro > .nbigphoto a').attr('href');
      const img = base + $('#gemintro > .nbigphoto img').attr('src').replace(/^(\/)/,"");;

      $('#gemintro > .nbigphoto').remove()

      gem['id'] = +args[0].match(/(\d+)/)[1];
      gem['name'] = $('.gemshowbox > h1').text();
      gem['description'] = $('#gemintro').text().trim();
      gem['img'] = img;

      axios(img_desc_url)
         .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const statsTable = $('#photodatatable tr');

            statsTable.each(function () {
               const th = slugify($(this).find('th').text().replace(":", "").trim(),  {
                  replacement: '_',
                  lower: true,
                  strict: true
                });
               const td = $(this).find('td').text().trim();
               gem[th] = td;
            });

            console.log(JSON.stringify(gem));
         })
         .catch(console.error);      
   })
   .catch(console.error);
