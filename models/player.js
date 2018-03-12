'use strict'

module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    playerName: {
        type: DataTypes.STRING,
        allowNull: false,
        len:[5-20]
    },
    playerID: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[5-15]
      // validate: {
      //   len: [1]
    },
    playerPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chosenCommander: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    // otherCommanderCards:{
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   required: false
    // },
    gameStats:{
      type: DataTypes.TEXT        
    }
});
  
  return Player;
};