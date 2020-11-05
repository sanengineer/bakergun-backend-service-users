const indexView = (req, res) => {
  res.send({
    message:
      "welcome RestAPI to service users database for bakergun games(https://github.com/sanengineer/bakergun-frontend",
    creator: "https://github.com/sanengineer",
  });
};

module.exports = {
  indexView,
};
