const { Sequelize } = require("sequelize/types");

module.exports =(sequelize, Sequelize) => {
    const usrGameBio = sequelize.define("user_game_biodata", {
        user_id: {
            type: Sequelize.STRING,
        },
        fullname: {
            type: Sequelize.STRING,
        },
        sex: {
            type: Sequelize.STRING,
        },
        jobs: {
            type: Sequelize.STRING,
        }
    })

    return usrGameBio
}