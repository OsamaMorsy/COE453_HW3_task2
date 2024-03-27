const express = require('express');
const app = express();

app.use(express.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 + num2 });
});

app.post('/sub', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 - num2 });
});

app.post('/mult', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 * num2 });
});

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ result: num1 / num2 });
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
