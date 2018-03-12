'use strict'

module.exports = function(sequelize, DataTypes){
  const PlayTableGame = sequelize.define("PlayTableGame", {
    playSessionID: {
        type: DataTypes.INTEGER,
              allowNull: false,
              // len:[5-20]
    },
    playDate: {
      type: DataTypes.DATE,
      allowNull: false,
      // len:[5-15]
      // validate: {
      //   len: [1]
    },
    playTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameType: {
      type: DataTypes.ENUM,
      values: ['leagueGame', 'nonLeagueGame']
    },
    // whichCardsUsed: {
    //   type: DataTypes.ARRAY(DataTypes.NUMBER),
    // },  
    // whoPlayedWhom: {
    //   type: DataTypes.ARRAY({DataTypes.NUMBER, DataTypes.NUMBER})
    // }
    officialTableNumber: {
      type: DataTypes.INTEGER
    },
    pointsAwarded: {
      type: DataTypes.INTEGER
    },
    winner: {
      type: DataTypes.STRING
    },
    winningPoints: {
      type: DataTypes.INTEGER
    }
  });
  
  return PlayTableGame;
};
