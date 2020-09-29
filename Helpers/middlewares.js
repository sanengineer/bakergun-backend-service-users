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
  const { avatar, name, sex, jobs, comment } = req.body;

  if (avatar && name && sex && jobs && comment) {
    next();
  } else {
    // res.status(400);
    res.status(400).json({ message: "Form field not pakem Gaess" });
  }
}

function mustBeString(req, res, next) {
  const id = req.params.id;
}

function checkFieldsPostGame(req, res, next) {
  const { name, imageUrl } = req.body;

  if (name && imageUrl) {
    next();
  } else {
    // res.status(400);
    res.status(400).json({ message: "Form field not pakem Gaess" });
  }
}

module.exports = {
  mustBeInteger,
  mustBeString,
  checkFieldsPost,
  checkFieldsPostGame,
};
