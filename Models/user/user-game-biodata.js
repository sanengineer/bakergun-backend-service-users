module.exports = (sequelize, Sequelize) => {
  const usrGameBio = sequelize.define("user_game_biodata", {
    user_game_biodata_id: {
      type: Sequelize.INTEGER,
    },
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
