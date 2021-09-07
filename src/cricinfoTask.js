const request = require('request');
const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const { all } = require('q');


// request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', function (error, response, html) {
//     if (error) {
//         console.error('error:', error); // Print the error if one occurred
//     }
//     else {
//         // console.log('html:', html); // Print the HTML for the Google homepage.
//         handleHtml(html);
//     }
// });

// const handleHtml = (html) => {
//     let $ = cheerio.load(html);
//     let data = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
//     console.log($(data).text());
// }


request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard', function (error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    }
    else {
        // console.log('html:', html); // Print the HTML for the Google homepage.
        handleHtml(html);
    }
});

const handleHtml = (html) => {
    let winTeam = ''
    let $ = cheerio.load(html);
    let data = $(".match-info.match-info-MATCH .team ");
    for (let i = 0; i < data.length; i++) {
        const className = $(data[i]).hasClass('team-gray');
        if (className == false) {
            winTeam = $(data[i]).find('.name');
            console.log(winTeam.text());
        }
    }
    let inningsArr = $(".match-body .card.content-block.match-scorecard-table>.Collapsible");
    for (let i = 0; i < inningsArr.length; i++) {
        let teamNameEle = $(inningsArr[i]).find('.header-title.label');
        let teamName = $(teamNameEle).text();
        // teamName = teamName.split("INNINGS")[0]
        teamName = teamName.split("INNINGS")[0];
        if (teamName === winTeam.text()) {
            console.log("ererereer")
            let table = $(inningsArr[i]).find(".table.bowler")
            let allBowler = $(table).find("tr");
            for (let j = 0; j < allBowler.length; j++) {
                let allColumn = $(allBowler[j]).find("td");
                console.log($(allColumn[0]).text());
            }
        }
    }

}


