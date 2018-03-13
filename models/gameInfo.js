'use strict'

module.exports = function(sequelize, DataTypes){
  var GameInfo = sequelize.define("GameInfo", {
    //playerID will be generated automatically by Sequelize
    playerName: {
        type: DataTypes.STRING,
    },
    commander: {
        type: DataTypes.STRING,
        },
    assignedTable: {
        type: DataTypes.INTEGER,
        allowNull: false,  
        },
    points:{
        type: DataTypes.INTEGER,
        required: false
        }
  });

  GameInfo.associate = function(models) {
    // We're saying that a GameInfo should belong to an League
    // A GameInfo can't be created without a League due to the foreign key constraint
    GameInfo.belongsTo(models.League, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return GameInfo;
};