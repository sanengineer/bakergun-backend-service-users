module.exports = (sequelize, Sequelize) => {
  const usrGameBio = sequelize.define("user_game_biodata", {
    fullname: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.STRING,
    },
    jobs: {
      type: Sequelize.STRING,
    },
  });

  return usrGameBio;
};
