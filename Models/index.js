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
db.Biodata = require("./user/user-game-biodata")(sequelize, Sequelize);
db.History = require("./user/user-game-history")(sequelize, Sequelize);

// db.History.hasOne(db.userGame);
// db.Biodata.hasOne(db.userGame);

// db.userGame.hasOne(db.History, { foreignKey: "user_id" });
// db.userGame.hasOne(db.Biodata, { foreignKey: "user_id" });

db.History.belongsTo(db.userGame, { foreignKey: "user_id" });
db.Biodata.belongsTo(db.userGame, { foreignKey: "user_id" });
module.exports = db;
