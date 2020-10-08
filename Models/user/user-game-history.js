module.exports = (sequelize, Sequelize) => {
  const usrGameHistory = sequelize.define("user_game_history", {
    user_game_history_id: {
      // type: Sequelize.UUID,
      type: Sequelize.INTEGER,
      allowNull: false,
      // defaultValue: Sequelize.UUIDV4,
      // defaultValue: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      // type: Sequelize.UUID,
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
