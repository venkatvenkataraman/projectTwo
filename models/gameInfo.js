'use strict'

module.exports = function(sequelize, DataTypes){
  var GameInfo = sequelize.define("GameInfo", {
    //playerID will be generated automatically by Sequelize
    playerName: {
        type: DataTypes.STRING,
    },
    checkedIn: {
      type: DataTypes.BOOLEAN,
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
    // We're saying that a GameInfo should belong to a League
    // A GameInfo can't be created without a League due to the foreign key constraint
    GameInfo.belongsTo(models.League, {
      foreignKey: {
        allowNull: false
      },
      // Adam added following line to get around index.js error in order of processing of .js files
      onDelete: "cascade"
    });
  };

  return GameInfo;
};