var Sequelize = require('sequelize');
var sequelize = require('../config/dbConn.js');

var Pet = sequelize.defineModel('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
},
{
  timestamps: false
});


module.exports = Pet;