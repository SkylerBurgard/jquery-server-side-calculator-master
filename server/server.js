//set up our server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const answerList = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.get('/math', (req, res) => {
  res.send(answerList);
});

// GET route that matches the client side one, to get our answer list from our math route

app.post('/math', (req, res) => {
  let equation = req.body;
  let answer;
  //post route thats gets our req.body (equation)
  if (equation.operation === 'add') {
    answer = parseInt(equation.num1) + parseInt(equation.num2);
  } else if (equation.operation === 'subtract') {
    answer = parseInt(equation.num1) - parseInt(equation.num2);
  } else if (equation.operation === 'multiply') {
    answer = parseInt(equation.num1) * parseInt(equation.num2);
  } else if (equation.operation === 'divide') {
    answer = parseInt(equation.num1) / parseInt(equation.num2);
  } // if else loops
  equation.answer = answer;

  answerList.push(equation);
  console.log(`IM THE ANSWER: ${answer}`);
  console.log(`IM THE EQUATION: ${equation}`);
  res.sendStatus(201);
}); // push method that pushes in new equations

app.listen(PORT, () => {
  console.log('Server up and running');
});

app.get('/equation', (req, res) => {
  console.log('get server info', answer);
  res.send(answer);
});