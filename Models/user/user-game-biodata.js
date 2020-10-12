module.exports = (sequelize, Sequelize) => {
  const usrGameBio = sequelize.define("user_game_biodata", {
    user_game_biodata_id: {
      // type: Sequelize.UUID, // ini buat apa ya?
      // defaultValue: Sequelize.UUIDV4, // ini buat apa ya?
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      // type: Sequelize.UUID,  // ini buat apa ya ?
      type: Sequelize.INTEGER,
      allowNull: false,
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
