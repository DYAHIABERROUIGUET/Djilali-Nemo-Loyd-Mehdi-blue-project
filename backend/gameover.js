// let dataJson = JSON.parse(fs.readFileSync(filePath,'utf8'))

function PhraseScore(data) {  
  // Extraction de la valeur d'alignment depuis les données JSON
  const playerAlignment = dataJson.alignment;
  let remark = null
  let remarkColor = null
  
  if (playerAlignment >= -21 && playerAlignment <-100) {
    remark = "Démon"
    remarkColor = "red"
  }
  else if (playerAlignment >= -20 && playerAlignment < 0) {
    remark = "Mal"
    remarkColor = "orange"
  }
  else if (playerAlignment >= 1 && playerAlignment < 20) {
    remark = "Bon"
    remarkColor = "lightgreen"
  }
  else if (playerAlignment >= 21 && playerAlignment < 100) {
    remark = "Ange"
    remarkColor = "green"
  }

  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('remarks').style.fontSize = "30px"
}

function Rejouer() {
  location.reload();
}
