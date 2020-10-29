const bcrypt = require("bcryptjs");

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

  usrGame.beforeSave((user, options) => {
    if (user.changed("password")) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(31),
        null
      );
    }
  });

  usrGame.prototype.comparePassword = function (passw, callbck) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return callbck(err);
      }
      callbck(null, isMatch);
    });
  };
  return usrGame;
};
