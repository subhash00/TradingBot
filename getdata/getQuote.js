const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = "https://www.moneycontrol.com/stocks/marketstats/nse-mostactive-stocks/nifty-50-9/";

const writeData = fs.createWriteStream('./post3.csv');

const getQuote = () => {
    return new Promise(resolve => {
        request(URL, function (err, res, html) {
            if (err) {
                console.log(err, "error occured while hitting URL");
            }
            else {
                //console.log(html);
                const $ = cheerio.load(html);
                //console.log($('.PR').find('.gld13 a').attr('href'))
                $('.gld13').each((i, element) => {
                    const stock_name1 = $(element).find('a').html();
                    //var stock_name = stock_name1.replace(/ /g, "");
                    array3.push(stock_name1)


                    //  const sss = stock_name.toString();
                    //  console.log(stock_name);
                    //return stock_perct;
                });
                // Array1.push(stock_name);
                //console.log(stock_perct);
               // console.log(array3.length)
                resolve(array3)
            }
        });

      
    });
};
module.exports = getQuote;
//}, 10000);
//clearInterval(intervalObject);
//console.log(Array1[0])

