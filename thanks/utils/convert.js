var path = require('path');
var csv = require('csv-to-json');

csv.parse({
  filename: path.resolve(__dirname, '../assets/backers.csv')
}, function(err, json) {
  if (err) {
    throw err;
  }

  var list = [];
  for (var i = 0; i < json.length; i++) {
    list.push({ id: i, name: json[i].name.toLowerCase() });
  }

  csv.writeJsonToFile({
    filename: path.resolve(__dirname, '../assets/backers.json'),
    json: list
  }, function(err) {
    if (err) {
      throw err;
    }
    console.log('Successfully converted CSV to JSON.');
  });
});