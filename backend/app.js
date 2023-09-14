// Importation des modules nécessaires
const express = require('express'); // Express.js pour créer un serveur web
const path = require('path'); // Module pour gérer les chemins de fichiers
const fs = require('fs'); // Module pour lire/écrire des fichiers
const bodyParser = require('body-parser'); // Middleware pour traiter les données POST
const app = express(); // Crée une instance d'Express

const port = 3000; // Numéro de port sur lequel le serveur écoutera
const data = require('./events.json'); // Importe les données à partir d'un fichier JSON

let jsonData; // Variable pour stocker des données JSON

// Middleware pour traiter les données POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Middleware pour servir des fichiers statiques (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, '../')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Route pour obtenir des événements depuis un fichier JSON
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

// Route de test avec un paramètre d'URL
app.get("/test/:id", (req, res) => {
    console.log(req.params);
    res.send("i love ynov test get");
});

// Route pour mettre à jour l'alignement (en attente d'implémentation)
app.put("/update/alignement", (req, res) => {
    // Cette route est actuellement vide, elle nécessite une implémentation.
});

// Route pour traiter les données POST
app.post("/test", (req, res) => {
    console.log(req.body);
    const filePath = "data.json";

    // Préparation des données en calculant le total de l'alignement
    let TotalAlignment = parseInt(req.body.alignmentQuestion1) + parseInt(req.body.alignmentQuestion2) + parseInt(req.body.alignmentQuestion3);
    gold = 100;

    jsonData = {
        "username": req.body.username,
        "startingItem": req.body.startingItem,
        "alignment": TotalAlignment,
        "gold": gold,
        "inventory": []
    };

    // Écriture des données dans un fichier JSON
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    // Redirection vers une page nommée 'question.html'
    res.redirect("question.html");
});

// Route pour afficher un événement spécifique et gérer la réponse
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

// Démarrage du serveur sur le port spécifié
app.listen(port, () => console.log('Server listening on port ' + port));
