module.exports = (sequelize, Sequelize) => {
  const usrGameHistory = sequelize.define("user_game_history", {
    score: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  });

  return usrGameHistory;
};
