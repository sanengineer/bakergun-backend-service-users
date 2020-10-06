const dbConfig = require("../config/db-config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: dbConfig.dialectOptions.ssl,
    rejectUnauthorized: dbConfig.dialectOptions.rejectUnauthorized,
  },
  // operatorsAliases: false, // masih bingung ini di pakai atau engga??
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userGame = require("./user/user-game")(sequelize, Sequelize);
// db.userGameBiodata = require("./user/user-game-biodata")(sequelize, Sequelize);
// db.userGameHistory = require("./user/user-game-history")(sequelize, Sequelize);

module.exports = db;
