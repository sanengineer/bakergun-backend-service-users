function mustBeInteger(req, res, next) {
  const id = req.params.id;

  if (!Number.isInteger(parseInt(id))) {
    // res.status(400);
    res.status(400).json({ message: "Check id, Integer Please!" });
  } else {
    next();
  }
}

function checkFieldsPost(req, res, next) {
  const { username, email, password } = req.body;

  if (username && email && password) {
    next();
  } else {
    // res.status(400);
    res.status(400).json({ message: "Form field not can't be empty" });
  }
}

module.exports = {
  mustBeInteger,
  checkFieldsPost,
};
