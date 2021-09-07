
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
    let winTeam = ''
    let setTool = cheerio.load(html);
    let data = setTool(".match-page-wrapper.commentary-page-wrapper .container .row .card .match-header-container .match-header .event .match-info.match-info-MATCH.match-info-MATCH-half-width .teams .team ");
    for(let i=0;i<data.length;i++){
        const className = setTool(data[i]).hasClass('team-gray');
        if (className == false) {
            winTeam = setTool(data[i]).find('.name');
            console.log("helo",winTeam.text());
        }
    }
    
}
