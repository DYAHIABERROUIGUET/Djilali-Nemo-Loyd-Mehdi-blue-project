console.log("hello");
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send("hello")
});
app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get('/sneaker/:id', (req, res)=>){
    const id = req.params.id;
    res.send(`sneaker n°${id}`);
}