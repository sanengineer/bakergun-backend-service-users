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

function checkFieldsPostUserGameBiodata(req, res, next) {
  const { fullname, sex, jobs } = req.body;

  if (fullname && sex && jobs) {
    next();
  } else {
    // res.status(400);
    res.status(400).json({ message: "Form field not can't be empty" });
  }
}

function checkFieldsPostUserGameHistory(req, res, next) {
  const { score, comment } = req.body;

  if (score && comment) {
    next();
  } else {
    // res.status(400);
    res.status(400).json({ message: "Form field not can't be empty" });
  }
}

module.exports = {
  mustBeInteger,
  checkFieldsPost,
  checkFieldsPostUserGameBiodata,
  checkFieldsPostUserGameHistory,
};
