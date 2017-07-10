var csv = require('csv');
var fs = require('fs');
var _ = ('lodash')
var csvData = fs.readFileSync('./deals.csv');
var htmlArray =[];
var finalhtml;
var lastcategory;

csv.parse(csvData, function(err, data){
  data.forEach(item => {
    htmlArray.push('<li>'+item[1]+'</li>')
    htmlArray.push('<li><a href="'+item[5]+'&ref=onesale">'+item[4]+'</a></li>')

  })
  finalhtml = '<ul>'+htmlArray.join('\n')+'</ul>';
  fs.writeFileSync('./final.html',finalhtml)
  console.log(finalhtml);
})
//
// [
//   'BEST_DEAL',
// 1  'Toys',
//   '7/10/2017',
//   '7/10/17 18:00',
// 4  'HolyStone Quadcopters: live video, cellphone control',
// 5  'https://www.amazon.com/b?node=17030265011',
// 6  ' $ 39.99 '
// ]
