const db = require("../Models");
const UserGame = db.userGame;
const Op = db.Sequelize.Op;

// create and save a new user game
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "please fill, can't empty",
    });

    return;
  }
};
