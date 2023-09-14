function PhraseScore(data) {
  // Extraction de la valeur d'alignment depuis les données JSON
  const playerAlignment = data.alignment;
  let remark = null;
  let remarkColor = null;
  if (playerAlignment <= -21 && playerAlignment > -100) {
    remark = "Un démon";
    remarkColor = "red";
  } else if (playerAlignment <= -20 && playerAlignment > 0) {
    remark = "Le mal";
    remarkColor = "orange";
  } else if (playerAlignment >= 1 && playerAlignment < 20) {
    remark = "Un bon";
    remarkColor = "lightgreen";
  } else if (playerAlignment >= 21 && playerAlignment < 100) {
    remark = "Un ange";
    remarkColor = "green";
  }
  
  document.getElementById('remarks').innerHTML = remark;
  document.getElementById('remarks').style.color = remarkColor;
  document.getElementById('remarks').style.fontSize = "50px";
}

function Rejouer() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
  // Votre code à exécuter une fois que la page est chargée

  // Effectuez la requête Fetch pour récupérer les données JSON
  fetch('/backend/data.json')
    .then(response => response.json())
    .then(data => {
      // Appelez PhraseScore avec les données JSON
      PhraseScore(data);
      console.log(data)
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données depuis le backend', error);
    });
});
