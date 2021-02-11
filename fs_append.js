var fs = require('fs');

fs.appendFile('sample_append.txt', 'Data Append to file \n', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Appended Successfully!');
    }
});