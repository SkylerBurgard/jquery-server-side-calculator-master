//set up our server

const express = require('express');
const app = express();



app.use(express.static('server/public'));

app.get('/meow', (req, res) => {
    res.send('Meow');
});

app.listen(5000, () => {
    console.log('Server up and running');
});