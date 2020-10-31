const passport = require("../Config/passport_binar");

function mustBeInteger(req, res, next) {
  const id = req.params.id;

  if (!Number.isInteger(parseInt(id))) {
    // res.status(400);
    res.status(400).json({ message: "Check id, Integer Please!" });
  } else {
    next();
  }
}

module.exports = {
  mustBeInteger,
};
