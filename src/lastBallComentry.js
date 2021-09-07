const  cheerio  = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const request = require('request');


request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', function(error,response,html){
    if(error){
        console.log("Error",error);
    }
    else{
        handleHtml(html);
    }

})
function handleHtml(html){
    let setTool = cheerio.load(html);
    let data = setTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    console.log(data.text());
    
}
