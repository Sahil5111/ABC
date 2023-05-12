const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

app.get('/random', (req, res) => {
  const source = req.query.Source;
  const destination = req.query.Destination;
  const Fare = Math.floor(Math.random() * 1000);
  console.log({source,destination,Fare})
  res.json({ source, destination, Fare });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
