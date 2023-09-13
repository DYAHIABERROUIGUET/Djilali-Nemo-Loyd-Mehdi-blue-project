const express = require('express');
const path = require('path');
const fs = require('fs');  // <-- Added this line
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

// Use bodyParser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// Set a root directory for static files
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    // Serve "index.html" when someone accesses the root
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/api/events', (req, res) => {  // <-- Added this block
    const jsonFilePath = path.join(__dirname, 'backend', 'events.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('File not found');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post("/test",(req,res) => {
    console.log(req.body);
    res.send("i love ynov POST")
})



app.listen(port, () => console.log('Server listening on port ' + port));
