const { Sequelize } = require("sequelize/types");

module.exports =(sequelize, Sequelize) => {
    const usrGame = sequelize.define("user_game", {
        user_id: {
            type: Sequelize.STRING,
        },
        avatar: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }
    })

    return usrGame
}