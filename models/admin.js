'use strict'

module.exports = function(sequelize, DataTypes){
  var Admin = sequelize.define("Admin", {
    adminID: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    adminPassword: {
        type: DataTypes.STRING,
        allowNull: false
        },
    teamStandingInLeague: {
        type: DataTypes.TEXT,
        allowNull: false,  
        },
    howManyCurrentGames:{
        type: DataTypes.INTEGER,
        required: false
        }
  });

  return Admin;
};