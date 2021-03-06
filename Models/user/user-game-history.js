module.exports = (sequelize, Sequelize) => {
  const usrGameHistory = sequelize.define("user_game_history", {
    user_game_history_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    score: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  });

  return usrGameHistory;
};
