const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = "https://www.moneycontrol.com/stocks/marketstats/nse-mostactive-stocks/nifty-50-9/";

const writeData = fs.createWriteStream('./post2.csv');

function getPerct() {
    return new Promise(resolve => {

        request(URL, function (err, res, html) {
            if (err) {
                console.log(err, "error occured while hitting URL");
            }
            else {
                //console.log(html);
                const $ = cheerio.load(html);
                //console.log($('.PR').find('.gld13 a').attr('href'))
                $('tr td:nth-child(5)').each((i, element) => {
                    const stock_perct = $(element).text();
                    array2.push(stock_perct);


                });
                //console.log(array2.length)
                // Array1.push(stock_name);
                //console.log(stock_perct);
                //     console.log('done.....')
                resolve(array2);
            }

        });
           
    });
};
module.exports= getPerct;
//}, 10000);
//clearInterval(intervalObject);
//console.log(Array1[0])
