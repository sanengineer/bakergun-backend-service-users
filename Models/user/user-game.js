module.exports = (sequelize, Sequelize) => {
  const usrGame = sequelize.define("user_game", {
    user_id: {
      // type: Sequelize.UUID,
      // defaultValue: Sequelize.UUIDV4,
      // defaultValue: Sequelize.INTEGER,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return usrGame;
};
