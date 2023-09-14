const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const data = require('./events.json');
const filePath = 'data.json';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

//nouvelle route pour try le changement de l'alignement
app.put("/update/alignment", (req, res) => {
    const newAlignment = req.body.alignment - 20; // La nouvelle valeur d'alignment
    jsonData.alignment = newAlignment;
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    res.json({ success: true, message: "Alignment mis à jour avec succès" }); //pour savoir si cela a fonctionner 
});

app.listen(port, () => console.log('Server listening on port ' + port));
