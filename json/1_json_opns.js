 const fs = require('fs');
 var jsonObj = {
     quote: 'To be a successful Entrepreneur you need patient, passion and perseverence',
     author: 'Varun Chandra',
 };

 var stringifiedQuote = JSON.stringify(jsonObj);
console.log(stringifiedQuote);

var parsedQuote = JSON.parse(stringifiedQuote);
console.log(parsedQuote);

// Write to file
fs.writeFile('json_out.json', stringifiedQuote, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('File written Successfuly');
    }
});

fs.readFile('json_out.json', function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File Read Successfully');
        console.log("As is data:", data.toString());
        console.log("Parsed Data: ", JSON.parse(data.toString()));
        console.log("A property on parsed data - Title", JSON.parse(data).quote);
        var jsObjFromFile = JSON.parse(fs.readFileSync('json_out.json').toString());
        jsObjFromFile.quote = "Enterpreneurship also need a person to learn communication skills";
        fs.writeFileSync('json_out.json', JSON.stringify(jsObjFromFile));
    }
});