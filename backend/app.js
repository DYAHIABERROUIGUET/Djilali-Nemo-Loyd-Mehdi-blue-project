const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Définir un répertoire racine pour les fichiers statiques
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    // Lorsque quelqu'un accède à la racine, renvoyez "index.html"
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => console.log('Server listening on port ' + port));