const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  app.send('Users Page');
});

function logger(req, res , next) {
  
}

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
