'use strict'

module.exports = function(sequelize, DataTypes) {
  const GameSetUp = sequelize.define("GameSetUp", {
    superAdminID: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[1-15]
      // validate: {
      //   len: [1]
      },
    superAdminPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1-20]
    }
  });

  return GameSetUp;
};




