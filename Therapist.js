const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);


const Therapist = sequelize.define('therapist', {
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  specialization: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avatarFile: {
    type: Sequelize.STRING
  }
}, {
  // options
});

module.exports = Therapist
