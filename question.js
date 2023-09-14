document.addEventListener('DOMContentLoaded', function () {
    // Créez une nouvelle requête XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurez la requête pour charger data.json
    xhr.open('GET', 'backend/data.json', true);

    // Configurez la fonction de rappel lorsque la requête est terminée
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('username').textContent = data.username;
            document.getElementById('gold').textContent = data.startingItem;
            document.getElementById('alignment').textContent = data.alignment;
            document.getElementById('argent').textContent = data.argent;
        }
    };

    // Envoyez la requête
    xhr.send();
});


document.addEventListener('DOMContentLoaded', function () {
    // Créez une nouvelle requête XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurez la requête pour charger data.json
    xhr.open('GET', 'backend/data.json', true);

    // Configurez la fonction de rappel lorsque la requête est terminée
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('username').textContent = data.username;
            document.getElementById('gold').textContent = data.startingItem;
            document.getElementById('alignment').textContent = data.alignment;
        }
    };

    // Envoyez la requête
    xhr.send();
});



// Fonction pour gérer le choix sélectionné
function handleChoice() {
    // Lisez les données actuelles depuis le fichier JSON
    fetch('backend/data.json')
        .then(response => response.json())
        .then(data => {
            const choixA = document.getElementById('choixA');
            const choixB = document.getElementById('choixB');

            if (choixA.checked) {
                // Le choix A est sélectionné
                const gain = Math.floor(Math.random() * 60) + 1; // Génère un nombre aléatoire entre 1 et 60
                data.alignment += gain; // Met à jour le score d'alignment
                alert("Vous avez gagné : " + gain);
            } else if (choixB.checked) {
                // Le choix B est sélectionné
                const perte = Math.floor(Math.random() * 70) + 1; // Génère un nombre aléatoire entre 1 et 70
                data.alignment -= perte; // Met à jour le score d'alignment
                alert("Vous avez perdu : " + perte);
            } else {
                // Aucun choix sélectionné
                alert("Aucun choix sélectionné");
            }

            // Enregistrez les modifications dans le fichier data.json ici.
            // Vous devrez mettre à jour les données avec les modifications et les enregistrer à nouveau.

            // Utilisez l'API fetch pour enregistrer les données mises à jour
            fetch('backend/data.json', {
                method: 'PUT', // Vous pouvez utiliser 'PUT' ou 'PATCH' selon vos besoins
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert('Modifications enregistrées avec succès.');
                } else {
                    alert('Erreur lors de l\'enregistrement des modifications.');
                }
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement des modifications :', error);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la lecture du fichier JSON :', error);
        });
}


// Ajoutez un gestionnaire d'événements pour les changements de sélection
const radioInputs = document.querySelectorAll('input[type=radio]');
radioInputs.forEach(input => {
    input.addEventListener('change', handleChoice);
});
