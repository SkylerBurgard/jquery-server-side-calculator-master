//set up our server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.get('/meow', (req, res) => {
  res.send('Meow');
});

app.listen(PORT, () => {
  console.log('Server up and running');
});
