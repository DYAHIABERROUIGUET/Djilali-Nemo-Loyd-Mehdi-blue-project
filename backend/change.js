const express = require('express');
const path = require('path');
const fs = require('fs'); 
const bodyParser = require('body-parser');
const app = express();


const fs = require('fs');
const filePath = 'data.json';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.post("/test", (req, res) => {
        console.log(req.body);
        let jsonData = {
            "username" : req.body.username,
            "startingItem" : req.body.startingItem,
            "alignment" : TotalAlignment - 200,
            "inventory": []
        };
    })