const path = require('path')
const express = require('express')

// Set local config, do not commit this file to git
try {
  require('./config');
} catch {}

const Therapist = require('./db/Therapist');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/therapists', async (req, res) => {
  const therapists = await Therapist.findAll({ attributes: ['name', 'specialization', 'avatarFile']});
  res.json(therapists)
})

app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Started up server'))
