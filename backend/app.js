const express = require('express');
const path = require('path');
const fs = require('fs'); 
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const data = require('./events.json');

let jsonData;

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

    app.put("/update/alignement",(req, res) => {



    })

    app.post("/test", (req, res) => {
        console.log(req.body);
        const filePath = "data.json";
        // preparation data
        let TotalAlignment = parseInt(req.body.alignmentQuestion1) + parseInt(req.body.alignmentQuestion2) + parseInt(req.body.alignmentQuestion3)
        gold = 100;
        jsonData = {
            "username" : req.body.username,
            "startingItem" : req.body.startingItem,
            "alignment" : TotalAlignment,
            "gold": gold,
            "inventory": []
        };
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.redirect("question.html")
    });
    
    // Votre route pour afficher l'événement et gérer la réponse
    app.get('/events/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const events = data.events;
        const event = events.find(s => s.id === id);
    
        if (event) {
            const choixA = event.choix.reponse.find(choix => choix.a === 'a');
            const choixB = event.choix.reponse.find(choix => choix.b === 'b');
            

            const htmlResponse = `
                <h2>Description de l'événement</h2>
                <p>${event.description}</p>
                <input type="radio" id="choixA" name="choix" value="a">
                <label for="choixA">${choixA.choix_a}</label>
    
                <input type="radio" id="choixB" name="choix" value="b">
                <label for="choixB">${choixB.choix_b}</label>
                `;
    
            res.send(htmlResponse);
        } else {
            res.status(404).send('Événement non trouvé');
        }
    });

app.listen(port, () => console.log('Server listening on port ' + port));
