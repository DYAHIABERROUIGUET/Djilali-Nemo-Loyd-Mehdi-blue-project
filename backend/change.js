const express = require('express');
const path = require('path');
const fs = require('fs'); 
const bodyParser = require('body-parser');
const app = express();


const fs = require('fs');
const filePath = 'data.json';

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const jsonData = JSON.parse(data);

//   jsonData.formData.alignmentQuestion2 = -200;
//   const updatedJson = JSON.stringify(jsonData, null, 4);

//   fs.writeFile(filePath, updatedJson, 'utf8', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Données mises à jour avec succès.");
//   });
// });
