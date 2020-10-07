module.exports = (sequelize, Sequelize) => {
  const usrGame = sequelize.define("user_game", {
    avatar: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return usrGame;
};
