'use strict'

module.exports = function(sequelize, DataTypes) {
  const League = sequelize.define("League", {
    //Auto incrementing leagueID will be automatically
    //defined by Sequelize
    leagueName: {
      type: DataTypes.STRING,
    //   allowNull: false,
    //   len:[5-15]
      // validate: {
      //   len: [1]
    },
    // leaguePlayers: {
    //   type: DataTypes.JSON,
    // },
    leaguePoints: {
       type: DataTypes.INTEGER,
    },
    leagueStanding: {
        type: DataTypes.STRING,
    },
    leagueCurrentGames: {
      type: DataTypes.INTEGER,
    },
    leagueAdminID: {
      type: DataTypes.STRING,
    },
    leaguePassword: {
      type: DataTypes.STRING,
    }
  });

  League.associate = function(models) {
    // Associating League with GameInfo
    // When a League is deleted, also delete any associated GameInfo
    League.hasMany(models.GameInfo, {
      onDelete: "cascade"
    });
  };

  return League;
};
