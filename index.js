const path = require('path')
const express = require('express')

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/ping', (req, res) => {
  res.send('Ping')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Started up server'))
