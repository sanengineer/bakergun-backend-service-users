const db = require("../Models");
const bcrypt = require("bcryptjs");

const UserGame = db.userGame;
const UserGameBiodata = db.userGameBiodata;
const UserGameHistory = db.userGameHistory;
const Op = db.Sequelize.Op;
const sequelize = db.Sequelize.literal;

module.exports = {
  // create user game
  createUserGame: (req, res) => {
    const createUserGameReqBody = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    //
    //Debugging
    console.log(
      "\n\n\n  🧪 \x1b[93mCreate Table User Game: \n\x1b[39m",
      "\n\x1b[93m    ✅ Username: " +
        createUserGameReqBody.username +
        "\x1b[39m\n",
      "\n\x1b[93m    ✅ Email: " + createUserGameReqBody.email + "\x1b[39m\n",
      "\n\x1b[93m    ✅ Password: " +
        createUserGameReqBody.password +
        "\x1b[39m\n"
    );

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
      UserGame.findAll({
        where: conditionUsername,
        attributes: { exclude: ["password", "email"] },
        order: sequelize(["user_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "error occured while search username",
          });
        });
    } else if (conditionEmail) {
      UserGame.findAll({
        where: conditionEmail,
        attributes: { exclude: ["password", "username"] },
        order: sequelize(["user_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "error occured while search email",
          });
        });
    } else {
      UserGame.findAll({
        attributes: { exclude: ["password"] },
        order: sequelize(["user_id ASC"]),
      })
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
    };

    //
    //Debugging
    console.log(
      "\n\n\n  🧪 \x1b[93mUpdate Table User Game: \n\x1b[39m",
      "\n\x1b[93m    ✅ Username: " +
        updateUserGameReqBody.username +
        "\x1b[39m\n",
      "\n\x1b[93m    ✅ Email: " + updateUserGameReqBody.email + "\x1b[39m\n"
    );

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

  // change user game password by id
  changeUserGamePassword: (req, res) => {
    const { id } = req.params;

    const changeUserGamePasswordReqBody = {
      password: bcrypt.hashSync(req.body.password, 10),
    };

    //
    //Debugging
    console.log(
      "\n\n\n  🧪 \x1b[93mUpdate Coloumn Password On Table User Game : \n\x1b[39m",
      "\n\x1b[93m    ✅ Password: " +
        changeUserGamePasswordReqBody.password +
        "\x1b[39m\n"
    );

    UserGame.update(changeUserGamePasswordReqBody, {
      where: { user_id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `user game password with id=${id} was updated successfully`,
          });
        } else {
          res.send({
            message: `can't updated user game password with id=${id} cause req.body is empty`,
          });
        }
      })
      .catch((e) => {
        res.status(500).send({
          message:
            e.message || `error updating user game password with id=${id}`,
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

    var conditionFullname = fullname
      ? { fullname: { [Op.iLike]: `%${fullname}%` } }
      : null;

    var conditionSex = sex ? { sex: { [Op.iLike]: `%${sex}` } } : null;

    var conditionJobs = jobs ? { jobs: { [Op.iLike]: `%${jobs}%` } } : null;

    if (conditionFullname) {
      UserGameBiodata.findAll({
        where: conditionFullname,
        attributes: { exclude: ["sex", "jobs"] },
        order: sequelize(["user_game_biodata_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + fullname,
          });
        });
    } else if (conditionSex) {
      UserGameBiodata.findAll({
        where: conditionSex,
        attributes: { exclude: ["fullname", "jobs"] },
        order: sequelize(["user_game_biodata_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + sex,
          });
        });
    } else if (conditionJobs) {
      UserGameBiodata.findAll({
        where: conditionJobs,
        attributes: { exclude: ["fullname", "sex"] },
        order: sequelize(["user_game_biodata_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + jobs,
          });
        });
    } else {
      UserGameBiodata.findAll()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "something error while get all user game biodata",
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
    const { fullname } = req.query;

    UserGameBiodata.destroy({
      where: { user_game_biodata_id: id, fullname: fullname },
    })
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
      UserGameHistory.findAll({
        where: conditionScore,
        attributes: { exclude: ["comment"] },
        order: sequelize(["user_game_history_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + score,
          });
        });
    } else if (conditionComment) {
      UserGameHistory.findAll({
        where: conditionComment,
        attributes: { exclude: ["score"] },
        order: sequelize(["user_game_history_id ASC"]),
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "something error while search: " + comment,
          });
        });
    } else {
      UserGameHistory.findAll({
        order: sequelize(["user_game_history_id ASC"]),
      })
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
    const { score } = req.query;

    UserGameHistory.destroy({
      where: { user_game_history_id: id, score: score },
    })
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
