const db = require("../Models");
const UserGame = db.userGame;
const Op = db.Sequelize.Op;

module.exports = {
  // get all user
  getAllUserGame: (req, res) => {
    UserGame.findAll() // findAll is function bawaan sequelize
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "something error to get all user",
        });
      });
  },

  searchByUsername: (req, res) => {
    const username = req.query.username;
    var condition = username
      ? { username: { [Op.like]: `%${username}%` } }
      : null;

    UserGame.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "error occured while search username",
        });
      });
  },
};
