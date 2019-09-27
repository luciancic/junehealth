const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Ping')
})

app.listen(3000, () => console.log('Started up server'))
