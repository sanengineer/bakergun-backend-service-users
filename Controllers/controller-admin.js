const { userGame } = require("../Models");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const passport = require("passport");

require("../Config/passport")(passport);

const UserGameBiodata = db.userGameBiodata;
const UserGame = db.userGame;
const UserGameHistory = db.userGameHistory;

module.exports = {
  // Sign Up User Game
  //
  // create and save a new user game
  signUpUserGame: (req, res) => {
    // create user
    const signUpUserGameReqBody = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    if (!signUpUserGameReqBody) {
      res.status(400).send({ msg: "Please pass username, password, email." });
    } else
      UserGame.create(signUpUserGameReqBody)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "found error while sign up user",
          });
        });
  },
  // Login User Game
  //
  loginUserGame: (req, res) => {
    UserGame.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then((data) => {
        if (!data) {
          return res.status(401).send({
            message: "Authentication failed. User not found",
          });
        }
        data.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            var token = jwt.sign(
              JSON.parse(JSON.stringify(user)),
              "nodeauthsec",
              {
                expiresIn: 86400 * 30,
              }
            );
            jwt.verify(token, "nodeauthsec", function (err, data) {
              console.log(err, data);
            });
            res.json({
              success: true,
              token: "JWT" + token,
            });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong password", // ini tu kok gak message tapi msg, knap ya?
            });
          }
        });
      })
      .catch((error) => {
        res.status(400).send({
          message: error.message || "something error when login",
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

  //update user by id
  updateUserGame: (req, res) => {
    const { id } = req.params;

    var token = getToken(req.headers)
    
    if (token) {
      UserGame.update(req.body, {
        where: { user_id: id },
      })
        .then((num) => {
          if (num == 1) {
            res.send({
              message: `user with id=${id}was updated successfully`,
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
    } else {
      return res.status(403).send({
        success:false, message: "Access Denied"
      })
    }
   
  },

  //delete user by id
  deleteOneUserGame: (req, res) => {
    const { id } = req.params;

    var token = getToken(req.headers)

    if (token){
      UserGame.destroy({ where: { user_id: id } })
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
    } else {
      return res.status(403).send({
        success:false, message: "Access Denied"
      })
    }
    
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

    var token = getToken(req.headers)
    if (token) {
      UserGameBiodata.create(usergamebiodata)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating user game biodata",
        });
      });
    } else {
      return res.status(403).send({
        success:false, message: "Access Denied"
      })
    }
   
  },

  // get one user game biodata by id
  getOneUserGameBiodata: (req, res) => {
    const id = req.params.id;

    var token = getToken(req.headers)

    if(token) {
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
    } else {
      return res.status(403).send({
        success: false, message: "Access Denied"
      })
    }
    
  },

  //update user game biodata by id
  updateUserGameBiodata: (req, res) => {
    const { id } = req.params;

    var token = getToken(req.headers)

    if(token){
      UserGameBiodata.update(req.body, {
        where: { user_game_biodata_id: id },
      })
        .then((num) => {
          if (num == 1) {
            res.send({
              message: `user game biodata with id=${id}was updated successfully`,
            });
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
    } else {
      return res.status(403).send({
        success:false, message:"Access Denied"
      })
    }
    
  },

  

  
  // create and save a new user game history
  createUserGameHistory: (req, res) => {
    // create user
    const usergamehistory = {
      score: req.body.score,
      comment: req.body.comment,
      user_id: req.body.user_id,
    };

    var token = getToken(req.headers)

    if(token) {
      UserGameHistory.create(usergamehistory)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "found error while creating user game history",
        });
      });
    } else {
      return res.status(403).send({
        success: false, message:"Access Denied"
      })
    }

    
  },

  // get one user game history by id
  getOneUserGameHistory: (req, res) => {
    const id = req.params.id;

    var token = getToken(req.headers)

    if(token){
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
    } else {
      return res.status(403).send({
        success:false, message: "Access Denied"
      })
    }

    
  },

  // get all user
  // getAllUserGameHIstory: (req, res) => {
  //   UserGameHistory.findAll() 
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "something error to get all user game history",
  //       });
  //     });
  // },

  //update user game history by id
  updateUserGameHistory: (req, res) => {
    const { id } = req.params;

    UserGameHistory.update(req.body, {
      where: { user_game_history_id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `user with id=${id}was updated successfully`,
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

  getToken = function(headers) {
    if (headers && headers.authorization){
      var parted = headers.authorization.split(" ");
      if (parted.length === 2) {
        return parted[1]
      } else {
        return null
      }
    } else {
      return null
    }
  }
};
