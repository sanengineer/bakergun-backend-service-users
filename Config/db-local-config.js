module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "sanmacair" || "metalbee",
  PASSWORD: process.env.PASSWORD || "",
  DB: process.env.DB || "bakergun_be_serve_users", // name database
  dialect: process.env.DIALECT || "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
