const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

// Utilisation de bodyParser pour traiter les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Définir un répertoire racine pour les fichiers statiques
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    // Lorsque quelqu'un accède à la racine, renvoyez "index.html"
    res.sendFile(path.join(__dirname, '../index.html'));
});


app.listen(port, () => console.log('Server listening on port ' + port));
