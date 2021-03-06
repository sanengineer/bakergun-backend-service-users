const dbConfig = require("../Config/db-local-config.js"); // setup local databases
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

console.log(
  "\n",
  "⚙️  Configuration For Access Database on 🐘 PostgreSQL : \n",
  "\n  Database Name : " + dbConfig.DB,
  "\n  Username : " + dbConfig.USER,
  "\n  Password : " + dbConfig.PASSWORD,
  "\n  Host : " + dbConfig.HOST,
  "\n  Dialect : " + dbConfig.DIALECT,
  "\n  Pool :",
  "   \n  - max : " + dbConfig.pool.max,
  "   \n  - min : " + dbConfig.pool.min,
  "   \n  - acquire : " + dbConfig.pool.acquire,
  "   \n  - idle : " + dbConfig.pool.idle,
  "\n"
);

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
