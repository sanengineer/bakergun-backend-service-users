const db = require("../Models");
const UserGame = db.userGame;

// create and save a new user game
exports.create = (req, res) => {
  // create user
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  UserGame.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "found error while creating user",
      });
    });
};

// get one user by id
exports.getOne = (req, res) => {
  const id = req.params.id;

  UserGame.findByPk(id)
    .then((data) => {
      if (data == data) {
        res.status(200).send(data);
      } else {
        res.status(200).send({
          message: `id = ${id} maybe was deleted`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "no user with" + id,
      });
    });
};

// get all user
exports.getAll = (req, res) => {
  UserGame.findAll() // findAll is function bawaan sequelize
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something error to get all user",
      });
    });
};

//update user by id
exports.update = (req, res) => {
  const id = req.params.id;

  UserGame.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `user with id=${id}was upadated successfully`,
        });
      } else {
        res.send({
          message: `can't update user with id=${id} maybe req.body is mty`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `error updating user with id=${id}`,
      });
    });
};

//delete user by id
exports.deleteOne = (req, res) => {
  const id = req.params.id;

  UserGame.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `user by id=${id} was deleted successfully`,
        });
      } else {
        res.send({
          message: `can't delete user with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "can't delete user with id=" + id,
      });
    });
};

//delete all user
exports.deleteAll = (req, res) => {
  UserGame.destroy({
    where: {},
    truncate: false, // apa itu truncate??
  })
    .then((nums) => {
      res.send({
        message: `${nums} Users was delete successfully`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Delete all failed",
      });
    });
};
