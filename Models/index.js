const dbConfig = require("../Config/db-local-config.js"); // setup local databases
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userGame = require("./user/user-game")(sequelize, Sequelize);
db.userGameBiodata = require("./user/user-game-biodata")(sequelize, Sequelize);
db.userGameHistory = require("./user/user-game-history")(sequelize, Sequelize);

db.userGameHistory.belongsTo(db.userGame, {
  foreignKey: {
    name: "user_id",
  },
});
db.userGameBiodata.belongsTo(db.userGame, {
  foreignKey: {
    name: "user_id",
  },
});

module.exports = db;
