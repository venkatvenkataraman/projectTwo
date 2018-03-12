'use strict'

module.exports = function(sequelize, DataTypes) {
  const LeagueTeam = sequelize.define("LeagueTeam", {
    leagueTeamName: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[5-15]
      // validate: {
      //   len: [1]
    },
    leagueTeamLocation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    leagueTeamContactInformation: {
      type: DataTypes.TEXT,
      allowNull: false,  
    }
  });

  return LeagueTeam;
};