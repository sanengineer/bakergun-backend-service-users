const passport = require("passport");
require("../Config/passport")(passport);

function mustBeInteger(req, res, next) {
  const id = req.params.id;

  if (!Number.isInteger(parseInt(id))) {
    // res.status(400);
    res.status(400).json({ message: "Check id, Integer Please!" });
  } else {
    next();
  }
}

function deleteWithQueryUsername(req, res, next) {
  const username = req.query.username;

  if (!username) {
    res.status(400).json({
      message: "give me a value of username please",
    });
  } else {
    next();
  }
}
function deleteWithQueryFullname(req, res, next) {
  const fullname = req.query.fullname;

  if (!fullname) {
    res.status(400).json({
      message: "give me a value of fullname please",
    });
  } else {
    next();
  }
}
function deleteWithQueryScore(req, res, next) {
  const score = req.query.score;

  if (!score) {
    res.status(400).json({
      message: "give me a value of score please",
    });
  } else {
    next();
  }
}

const RestricAccess = passport.authenticate("jwt", { session: false });

module.exports = {
  mustBeInteger,
  deleteWithQueryUsername,
  deleteWithQueryFullname,
  deleteWithQueryScore,
  RestricAccess,
};
