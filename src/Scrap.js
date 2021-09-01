const request = require('request');
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');


request('https://www.worldometers.info/coronavirus/country/pakistan/', function (error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    }
    else {
        // console.log('body:', body); // Print the HTML for the Google homepage.
        handleHtml(html)
    }
});

function handleHtml(html){
    let selTool = cheerio.load(html);
    let data = selTool(".maincounter-number");
    console.log(selTool(data[0]).text());
}