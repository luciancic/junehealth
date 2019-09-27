const path = require('path')
const express = require('express')

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/ping', (req, res) => {
  res.send('Ping')
})

app.listen(3000, () => console.log('Started up server'))
