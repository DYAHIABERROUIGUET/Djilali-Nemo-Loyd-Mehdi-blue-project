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

    // app.post("/test", (req, res) => {
    //     console.log(req.body);
    //     res.send("i love ynov POST"); // Utilisez res.send() pour envoyer la réponse
    // });

    app.post("/test", (req, res) => {
        console.log(req.body);
        res.send("i love ynov POST");
        const formData = req.body;
        const filePath = "data.json";
        let jsonData = {};
    try {
        const fileContents = fs.readFileSync(filePath, "utf-8");
        jsonData = JSON.parse(fileContents);
    } catch (error) {
        // Le fichier n'existe peut-être pas encore, c'est OK
    }
    jsonData.formData = formData;

    // Enregistrez les données mises à jour dans le fichier JSON
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.send("Données enregistrées avec succès !");
    });



app.listen(port, () => console.log('Server listening on port ' + port));
