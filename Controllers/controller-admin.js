const { userGame } = require("../Models");
const db = require("../Models");
const UserGameBiodata = db.userGameBiodata;
const UserGame = db.userGame;
const UserGameHistory = db.userGameHistory;

module.exports = {
  // render view dashboard
  viewDashboard: async (req, res) => {
    try {
      const usergame = await UserGame.findAll();
      const userbiodata = await UserGameBiodata.findAll();
      const userhistory = await UserGameHistory.findAll();
      res.render("admin/dashboard", {
        usergame,
        userbiodata,
        userhistory,
      });
    } catch (error) {
      res.redirect("/admin/dashboard");
    }
  },

  // render view sign in
  viewSignin: (req, res) => {
    res.render("index");
  },

  // render user list on dashboard
  renderAllUserGame: (req, res) => {
    UserGame.findAll()
      .then((usergame) => {
        res.render("admin/dashboard", {
          usergame,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "something error to get all user",
        });
      });
  },

  // create and save a new user game
  createUserGame: (req, res) => {
    // create user
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    UserGame.create(user)
      .then((data) => {
        // res.send(data);
        res.redirect("dashboard");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "found error while creating user",
        });
      });
  },

  // get one user by id
  getOneUserGame: (req, res) => {
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
  },

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

  //update user by id
  updateUserGame: (req, res) => {
    const { id } = req.params;

    UserGame.update(req.body, {
      where: { user_id: id },
    })
      .then((num) => {
        if (num == 1) {
          // res.send({
          //   message: `user with id=${id}was upadated successfully`,
          // });
          res.redirect("/admin/dashboard");
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
  },

  //delete user by id
  deleteOneUserGame: (req, res) => {
    const { id } = req.params;

    UserGame.destroy({ where: { user_id: id } })
      .then((num) => {
        if (num == 1) {
          // res.send({
          //   message: `user by id=${id} was deleted successfully`,
          // });
          res.redirect("/admin/dashboard");
        } else {
          res.send({
            message: `can't delete user with id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "(respon500) can't delete user with id=" + id,
        });
      });
  },

  //delete all user
  deleteAllUserGame: (req, res) => {
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
  },

  // create and save a new user game history
  createUserGameBiodata: (req, res) => {
    // create user
    const usergamebiodata = {
      fullname: req.body.fullname,
      sex: req.body.sex,
      jobs: req.body.jobs,
      user_id: req.body.user_id,
    };

    UserGameBiodata.create(usergamebiodata)
      .then((data) => {
        // res.send(data);
        res.redirect("dashboard");
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating user game biodata",
        });
      });
  },

  // get one user by id
  getOneUserGameBiodata: (req, res) => {
    const id = req.params.id;

    UserGameBiodata.findByPk(id)
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
          message: err.message || "no user game biodata with" + id,
        });
      });
  },

  // get all user
  getAllUserGameBiodata: (req, res) => {
    UserGameBiodata.findAll() // findAll is function bawaan sequelize
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "something error to get all user game biodata",
        });
      });
  },

  //update user game history by id
  updateUserGameBiodata: (req, res) => {
    const { id } = req.params;

    UserGameBiodata.update(req.body, {
      where: { user_game_biodata_id: id },
    })
      .then((num) => {
        if (num == 1) {
          // res.send({
          //   message: `user game biodata with id=${id}was upadated successfully`,
          // });
          res.redirect("/admin/dashboard");
        } else {
          res.send({
            message: `can't update user game biodata with id=${id} maybe req.body is mty`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `error updating user game biodata with id=${id}`,
        });
      });
  },

  //delete user game history by id
  deleteOneUserGameBiodata: (req, res) => {
    const { id } = req.params;

    UserGameBiodata.destroy({ where: { user_game_biodata_id: id } })
      .then((num) => {
        if (num == 1) {
          // res.send({
          //   message: `user game biodata by id=${id} was deleted successfully`,
          // });
          res.redirect("/admin/dashboard");
        } else {
          res.send({
            message: `can't delete user game biodata with id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "respon(500) can't delete user game biodata with id=" + id,
        });
      });
  },

  //delete all user game history
  deleteAllUserGameBiodata: (req, res) => {
    UserGameBiodata.destroy({
      where: {},
      truncate: false, // apa itu truncate??
    })
      .then((nums) => {
        res.send({
          message: `${nums} user game biodata was delete successfully`,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Delete all failed",
        });
      });
  },

  // create and save a new user game history
  createUserGameHistory: (req, res) => {
    // create user
    const usergamehistory = {
      score: req.body.score,
      comment: req.body.comment,
      user_id: req.body.user_id,
    };

    UserGameHistory.create(usergamehistory)
      .then((data) => {
        // res.send(data);
        res.redirect("dashboard");
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating user game history",
        });
      });
  },

  // get one user by id
  getOneUserGameHistory: (req, res) => {
    const id = req.params.id;

    UserGameHistory.findByPk(id)
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
          message: err.message || "no user game history with" + id,
        });
      });
  },

  // get all user
  getAllUserGameHIstory: (req, res) => {
    UserGameHistory.findAll() // findAll is function bawaan sequelize
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "something error to get all user game history",
        });
      });
  },

  //update user game history by id
  updateUserGameHistory: (req, res) => {
    const { id } = req.params;

    UserGameHistory.update(req.body, {
      where: { user_game_history_id: id },
    })
      .then((num) => {
        if (num == 1) {
          // res.send({
          //   message: `user with id=${id}was upadated successfully`,
          // });
          res.redirect("/admin/dashboard");
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
  },

  //delete user game history by id
  deleteOneUserGameHistory: (req, res) => {
    const { id } = req.params;

    UserGameHistory.destroy({ where: { user_game_history_id: id } })
      .then((num) => {
        if (num == 1) {
          // res.send({
          //   message: `user game history by id=${id} was deleted successfully`,
          // });
          res.redirect("/admin/dashboard");
        } else {
          res.send({
            message: `can't delete user game history with id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "can't delete user game history with id=" + id,
        });
      });
  },

  //delete all user game history
  deleteAllUserGameHistory: (req, res) => {
    UserGameHistory.destroy({
      where: {},
      truncate: false, // apa itu truncate??
    })
      .then((nums) => {
        res.send({
          message: `${nums} user game history was delete successfully`,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Delete all failed",
        });
      });
  },
};
