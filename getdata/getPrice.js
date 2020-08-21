const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = "https://www.moneycontrol.com/stocks/marketstats/nse-mostactive-stocks/nifty-50-9/";

const writeData = fs.createWriteStream('./post.csv');

function getPrice () {
    return new Promise(resolve => {
        request(URL, function (err, res, html) {
            if (err) {
                console.log(err, "error occured while hitting URL");
            }
            else {
                //console.log(html);
                const $ = cheerio.load(html);
                //console.log($('.PR').find('.gld13 a').attr('href'))
                //td:nth-child(4)

                $('tr td:nth-child(4)').each((i, element) => {
                    const stock_ltp1 = $(element).html();
                    var stock_ltp = stock_ltp1.replace(/,/g, "");

                    array1.push(stock_ltp)

                    //  const sss = stock_name.toString();
                    //  console.log(stock_ltp);
                    //return stock_perct;
                });
                // Array1.push(stock_name);
                //console.log(xyz1[0]);
              //  console.log(array1.length)
                resolve(array1);

            }
        });

       
    });
};
module.exports= getPrice;
//}, 10000);
//clearInterval(intervalObject);
//console.log(Array1[0])
