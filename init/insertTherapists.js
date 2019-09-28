try {
  require('../config');
} catch {}

const Therapist = require('../db/Therapist')

const THERAPIST_LIST = [
  {
    name: 'Nicholas Doe',
    specialization: 'Psychologist',
    avatarFile: 'av1.jpg'
  },
  {
    name: 'John Doe',
    specialization: 'Cognitive Psychology',
    avatarFile: 'av2.jpg'
  },
  {
    name: 'Jessica Doe',
    specialization: 'Counseling Psychology',
    avatarFile: 'av3.jpg'
  },
  {
    name: 'Anthony Doe',
    specialization: 'Couples Counseling',
    avatarFile: 'av4.jpg'
  },
  {
    name: 'Samantha Doe',
    specialization: 'Clinical Psychology',
    avatarFile: 'av5.jpg'
  },
]

Therapist.sync().then(() => {
  THERAPIST_LIST.forEach(th => Therapist.create(th))
})
