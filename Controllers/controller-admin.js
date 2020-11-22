const db = require("../Models");
const bcrypt = require("bcryptjs");
const UserGame = db.userGame;
const UserGameBiodata = db.userGameBiodata;
const UserGameHistory = db.userGameHistory;
const Op = db.Sequelize.Op;

module.exports = {
  // create user game
  createUserGame: (req, res) => {
    const createUserGameReqBody = {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    };

    if (
      !createUserGameReqBody.username ||
      !createUserGameReqBody.email ||
      !createUserGameReqBody.password
    ) {
      res.status(400).send({
        message: "Please fill username, email, and password",
      });
    } else
      UserGame.create(createUserGameReqBody)
        .then((data) => {
          // res.status(201).send(data)
          res.status(201).send({
            message: "Successfull create new user",
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || "found error while create new user",
          });
        });
  },

  // get all user game
  // getAllUserGame: (req, res) => {
  //   UserGame.findAll() // findAll is function bawaan sequelize
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: err.message || "something error to get all user",
  //       });
  //     });
  // },

  // search user game by username
  getAllOrSearchByUsername: (req, res) => {
    const { username, email } = req.query;

    var conditionUsername = username
      ? { username: { [Op.like]: `%${username}%` } }
      : null;

    var conditionEmail = email ? { email: { [Op.like]: `%${email}%` } } : null;

    if (conditionUsername) {
      UserGame.findAll({ where: conditionUsername })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "error occured while search username",
          });
        });
    } else {
      UserGame.findAll({ where: conditionEmail })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "error occured while search email",
          });
        });
    }
  },

  // update user game by id
  updateUserGame: (req, res) => {
    const { id } = req.params;

    const updateUserGameReqBody = {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    };

    // UserGame.update(req.body, {
    //   where: { user_id: id },
    // })
    // UserGame.update(
    //   req.body,
    //   { password: hash },
    //   {
    //     where: { user_id: id },
    //   }
    // )
    UserGame.update(updateUserGameReqBody, {
      where: { user_id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `user game with id=${id} was updated successfully`,
          });
        } else {
          res.send({
            message: `can't updated user with id=${id} cause req.body is empty`,
          });
        }
      })
      .catch((e) => {
        res.status(500).send({
          message: e.message || `error updating user game with id=${id}`,
        });
      });
  },

  //delete user game by id
  deletOneUserGame: (req, res) => {
    const { id } = req.params;
    const { username } = req.query;

    UserGame.destroy({
      where: { user_id: id, username: username },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `user game id=${id} was deleted successfully`,
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
  },

  //create user game biodata
  createUserGameBiodata: (req, res) => {
    const userGameBiodataReqBody = {
      fullname: req.body.fullname,
      sex: req.body.sex,
      jobs: req.body.jobs,
      user_id: req.body.user_id,
    };

    UserGameBiodata.create(userGameBiodataReqBody)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating user game biodata",
        });
      });
  },

  getAllUserGameBiodata: (req, res) => {
    const { fullname, sex, jobs } = req.query;

    var conditionsFullname = fullname
      ? { fullname: { [Op.iLike]: `%${fullname}%` } }
      : null;

    var conditionSex = sex ? { sex: { [Op.iLike]: `%${sex}` } } : null;

    var conditionJobs = jobs ? { jobs: { [Op.iLike]: `%${jobs}%` } } : null;

    if (conditionsFullname) {
      UserGameBiodata.findAll({ where: conditionsFullname })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + fullname,
          });
        });
    } else if (conditionSex) {
      UserGameBiodata.findAll({ where: conditionSex })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + sex,
          });
        });
    } else {
      UserGameBiodata.findAll({ where: conditionJobs })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + jobs,
          });
        });
    }
  },

  // update user game biodata
  updateUserGameBiodata: (req, res) => {
    const { id } = req.params;

    UserGameBiodata.update(req.body, {
      where: { user_game_biodata_id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `user biodata with user_game_biodata_id=${id} was updated successfully`,
          });
        } else {
          res.send({
            message: `can't update user biodata with user_game_biodata_id=${id} maybe req.body is empty`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: ` error updating user biodata with user_game_biodata_id=${id}`,
        });
      });
  },

  // delete user game biodata by id
  deleteOneUserGameBiodata: (req, res) => {
    const { id } = req.params;

    UserGameBiodata.destroy({ where: { user_game_biodata_id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `user biodata with user_game_biodata_id=${id} was deleted successfully`,
          });
        } else {
          res.send({
            message: `can't delete user biodata with user_game_biodata_id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            `can't delete user biodata with user_game_biodata_id=${id}`,
        });
      });
  },

  // create user game history
  createUserGameHistory: (req, res) => {
    const userGameHistoryReqBody = {
      score: req.body.score,
      comment: req.body.comment,
      user_id: req.body.user_id,
    };

    UserGameHistory.create(userGameHistoryReqBody)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating user game history",
        });
      });
  },

  // get all user game history
  getAllUserGameHistory: (req, res) => {
    const { score, comment } = req.query;

    var conditionScore = score ? { score: { [Op.like]: `%${score}%` } } : null;

    var conditionComment = comment
      ? { comment: { [Op.iLike]: `%${comment}%` } }
      : null;

    if (conditionScore) {
      UserGameHistory.findAll({ where: conditionScore })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + score,
          });
        });
    } else {
      UserGameHistory.findAll({ where: conditionComment })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + comment,
          });
        });
    }
  },

  // update user game history by id
  updateUserGameHistory: (req, res) => {
    const { id } = req.params;

    UserGameHistory.update(req.body, {
      where: {
        user_game_history_id: id,
      },
    }).then((num) => {
      if (num == 1) {
        res.send({
          message: `user history with user_game_history_id=${id} was updated successfully`,
        });
      } else {
        res.send({
          message: `can't update user history with user_game_history_id=${id} maybe req.body is empty`,
        });
      }
    });
  },

  // delete user game biodata by id
  deleteOneUserGameHistory: (req, res) => {
    const { id } = req.params;

    UserGameHistory.destroy({ where: { user_game_history_id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: ` user history with user_game_history_id=${id} was deleted successfully `,
          });
        } else {
          res.send({
            message: `can't delete user history with user_game_history_id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            `can't delete user history with user_game_history_id=${id}`,
        });
      });
  },
};
