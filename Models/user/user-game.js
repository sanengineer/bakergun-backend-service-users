const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
  const usrGame = sequelize.define("user_game", {
    user_id: {
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

  // generateToken = () => {
  //   const payload = {
  //     id: this.id,
  //     username: this.username,
  //   };

  //   const secret = "sanodesecret";

  //   const token = jwt.sign(payload, secret);
  //   return token;
  // };

  usrGame.beforeSave((user, options) => {
    if (user.changed("password")) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(8),
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
