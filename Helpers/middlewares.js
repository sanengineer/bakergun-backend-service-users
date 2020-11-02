// const passport = require("passport");
// require("../Config/passport")(passport);

function mustBeInteger(req, res, next) {
  const id = req.params.id;

  if (!Number.isInteger(parseInt(id))) {
    // res.status(400);
    res.status(400).json({ message: "Check id, Integer Please!" });
  } else {
    next();
  }
}

// function RestricAccess(passport) {
//   passport.authenticate("jwt", { session: false });
// }

module.exports = {
  mustBeInteger,
  // RestricAccess,
};
