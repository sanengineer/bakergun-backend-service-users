module.exports = {
  HOST: "localhost",
  USER: "sanmacair",
  PASSWORD: "",
  DB: "bakergun_be_serve_users", // name database
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
