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
