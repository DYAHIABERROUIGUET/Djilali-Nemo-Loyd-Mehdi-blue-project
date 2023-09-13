const express = require('express');
const path = require('path');
const fs = require('fs'); 
const bodyParser = require('body-parser');
const app = express();

const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/api/events', (req, res) => { 
    const jsonFilePath = path.join(__dirname, 'backend', 'events.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('File not found');
            return;
        }
        res.json(JSON.parse(data));
    });
});
    app.get("/test/:id", (req, res) => {
        console.log(req.params);
        res.send("i love ynov test get"); 
    });

    app.post("/test", (req, res) => {
        console.log(req.body);

        const filePath = "data.json";

        // preparation data
        let TotalAlignment = parseInt(req.body.alignmentQuestion1) + parseInt(req.body.alignmentQuestion2) + parseInt(req.body.alignmentQuestion3)
        let jsonData = {
            "username" : req.body.username,
            "startingItem" : req.body.startingItem,
            "alignment" : TotalAlignment,
            "inventory": []
        };
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.redirect("/")
    });



app.listen(port, () => console.log('Server listening on port ' + port));
