const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('AFK bot is alive!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

setInterval(() => {
  const http = require('http');
  http.get("https://heart_stealers_SMP.aternos.me/");
}, 280000); // Every 4 minutes 40 s
