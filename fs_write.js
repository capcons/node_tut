var fs = require('fs');

fs.writeFile('sample_write.txt', 'Data overwriten written to file', function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File written successfuly');
    }
});