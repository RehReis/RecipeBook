const express = require('express');
const app = express();
const port = 3000;
const {getData} = require('../database');
const {saveData} = require('../database');

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

app.get('/recipes', (req, res) {
  getData()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    res.sendStatus(404);
  })
});


app.post('/recipes', (req, res) {
  saveData(req.body.recipe)
  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    res.sendStatus(500);
  })
});