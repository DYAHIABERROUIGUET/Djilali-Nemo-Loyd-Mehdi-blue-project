const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le middleware cors

const app = express();
const port = 3000;
const data = require('./events.json');
var http = require("http");

// Activez CORS pour toutes les routes
app.use(cors());

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


// Creation du joueur
app.post("/player", (req, res) => {
    console.log(req.body);
    const filePath = "data.json";
    let TotalAlignment = parseInt(req.body.alignmentQuestion1) + parseInt(req.body.alignmentQuestion2) + parseInt(req.body.alignmentQuestion3)
    jsonData = {
        "username": req.body.username,
        "startingItem": "Inventaire : " + req.body.startingItem,
        "alignment": TotalAlignment,
        "argent": "Argent : " + 100 + "$",
        "inventory": [req.body.startingItem],
        "questionTime": []
    };
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.redirect(`/question?q=1`)
});


app.get('/question',(req,res) => {
    res.sendFile(path.join(__dirname, '../question.html'));
})


// Votre route pour afficher l'événement et gérer la réponse
app.get('/events/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const events = data.events;
    const event = events.find(s => s.id === id);
    if (event) {
        const choixA = event.choix.reponse.find(choix => choix.a === 'a');
        const choixB = event.choix.reponse.find(choix => choix.b === 'b');
        


        const htmlResponse = `
                <form action="http://localhost:3000/event/data/${id}" method="POST">
                <h2>Description de l'événement</h2>
                <p>${event.description}</p>
                <input type="radio" id="choixA" name="choix" value="${choixA.effect}">
                <label for="choixA">${choixA.choix_a}</label>
    
                <input type="radio" id="choixB" name="choix" value="${choixB.effect}">
                <label for="choixB">${choixB.choix_b}</label>
                <button id="fetchButton" type="submit">Valider</button>
                </form>`;
        
        res.send(htmlResponse);
    } else {
        res.status(404).send('Événement non trouvé');
    }
});

var i = 0;
// Traitement data form jeux
app.post("/event/data/:id", (req, res) => {
    const filePath = "data.json";
    let dataJson = JSON.parse(fs.readFileSync(filePath,'utf8'))
    if (dataJson.questionTime == 5){
        if (i = 0){
            dataJson.alignment -= req.body.price;
        }
    }

    dataJson.argent -= req.body.effect;
    console.log(dataJson);

    if(dataJson.questionTime.length >= 11){
        res.redirect('/gameover.html');
        return; // Arret code 
    }

    let id_question = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
    console.log(id_question);

    while (dataJson.questionTime.includes(id_question)) {
        id_question = Math.floor(Math.random() * 11) + 1;
    }

    dataJson.questionTime.push(id_question);
    console.log(dataJson.questionTime);

    fs.writeFileSync(filePath, JSON.stringify(dataJson, null, 2));
    res.redirect(`/question?q=${id_question}`);
});


app.get('/redi', (req, res) => {
    // Redirigez vers la page "gameover.html"
    res.redirect('/gameover.html');
});


app.listen(port, () => console.log('Server listening on port ' + port));
