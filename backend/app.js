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

    // app.post("/test", (req, res) => {
    //     console.log(req.body);
    //     res.send("i love ynov POST"); // Utilisez res.send() pour envoyer la réponse
    // });

    app.post("/test", (req, res) => {
        console.log(req.body);
        const formData = req.body;
        const filePath = "data.json";
        let jsonData = {};
    try {
        const fileContents = fs.readFileSync(filePath, "utf-8");
        jsonData = JSON.parse(fileContents);
    } catch (error) {
    }
    jsonData.formData = formData;

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.redirect("/")
    });



app.listen(port, () => console.log('Server listening on port ' + port));
