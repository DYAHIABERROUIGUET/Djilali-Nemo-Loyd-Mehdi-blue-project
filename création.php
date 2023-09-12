<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="main.css" rel="stylesheet">
    <script src="cookie.js"></script>
</head>

<body>

    <label>Comment vous appelez-vous ?
        <input type='text' name='firstName' id='firstName' placeholder="First Name">
    </label>

    <div class="titre">
        <h3>Veuillez choisir un objet pour commencer l'aventure</h3>
    </div>

    <div class="objet">

        <input type="checkbox" class="single-checkbox" id="ob" name="" value="objet1">
        <label for="objet1">Trèfle à quatre feuilles</label><br>
        <input type="checkbox" class="single-checkbox" id="ob" name="" value="objet2">
        <label for="objet2">Bénédiction des dieux</label><br>
        <input type="checkbox" class="single-checkbox" id="ob" name="" value="objet3">
        <label for="objet3">Bonne étoile</label><br>

    </div>
    <p>Questionnaire d'alignement :</p>
    <label>
        <input type="radio" name="alignment" value="good"> Bonne action (+20 d'alignement)
    </label><br>
    <label>
        <input type="radio" name="alignment" value="neutral" checked> Neutre (0 d'alignement)
    </label><br>
    <label>
        <input type="radio" name="alignment" value="bad"> Mauvaise action (-20 d'alignement)
    </label><br>

    <button onclick="window.location='initialisation.html';" id="start">Créer le joueur</button>


    </form>

</body>
<script>
    const checkboxes = document.querySelectorAll('.single-checkbox');

    // Ajoutez un écouteur d'événements à chaque case à cocher
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(e) {
            // Si la case à cocher est sélectionnée, désélectionnez toutes les autres
            if (e.target.checked) {
                checkboxes.forEach(function(box) {
                    if (box !== e.target) {
                        box.checked = false;
                    }
                });
            }
        });
    });
</script>
<?php
$dsn = 'mysql:host=127.0.0.1;dbname=formulaireprojectblue;charset=utf8mb4';
$pdo = new PDO($dsn, 'root', '');
?>

</html>