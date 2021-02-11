const fs = require('fs');
const express = require('express');
const app = express();
const port = 6500;

app.get('/', (req, res) => {
    res.send('<h1> Welcome to express server</h1>')
});

app.get('/getmovies', function(req,res) {
    fs.readFile('data-db.json', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(JSON.parse(result.toString()))
        }
    })
});

app.listen(port, (err)=> {
    console.log('Server is running on port ' +port);
});