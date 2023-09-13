const express = require('express');
const app = express();
const data = require('./events.json');
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Événement</title>
        </head>
        <body>
            <h1>Événement</h1>
            <button id="fetchButton">Afficher Événement Suivant</button>
            <div id="eventData"></div>

            <script>
                const fetchButton = document.getElementById('fetchButton');
                let currentEventId = 1; // ID de l'événement actuel

                fetchButton.addEventListener('click', () => {
                    // Effectuer une requête AJAX pour récupérer les données de l'événement suivant
                    fetch('/events/' + currentEventId)
                        .then(response => response.text())
                        .then(data => {
                            document.getElementById('eventData').innerHTML = data;
                            currentEventId++; // Passer à l'événement suivant
                        })
                        .catch(error => {
                            console.error('Erreur lors de la récupération des données :', error);
                        });
                });

                // Fonction pour gérer le choix sélectionné
                function handleChoice() {
                    const choixA = document.getElementById('choixA');
                    const choixB = document.getElementById('choixB');

                    if (choixA.checked) {
                        // Le choix A est sélectionné
                        // Ajoutez ici la logique pour gérer le choix A
                        alert("Choix A sélectionné");
                    } else if (choixB.checked) {
                        // Le choix B est sélectionné
                        // Ajoutez ici la logique pour gérer le choix B
                        alert("Choix B sélectionné");
                    } else {
                        // Aucun choix sélectionné
                        alert("Aucun choix sélectionné");
                    }
                }

                // Ajoutez un gestionnaire d'événements pour les changements de sélection
                const radioInputs = document.querySelectorAll('input[type=radio]');
                radioInputs.forEach(input => {
                    input.addEventListener('change', handleChoice);
                });
            </script>
        </body>
        </html>
    `);
});

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
            <label for="choixA">Choix A</label>

            <input type="radio" id="choixB" name="choix" value="b">
            <label for="choixB">Choix B</label>
            `;

        res.send(htmlResponse);
    } else {
        res.status(404).send('Événement non trouvé');
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
