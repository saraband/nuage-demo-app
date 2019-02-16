import express from 'express';

const PORT = 3000;
const app = express();

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the server');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});