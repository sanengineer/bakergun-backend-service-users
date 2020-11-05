module.exports = {
  HOST: "https://bakergun-backend-service-users.herokuapp.com",
  // USER: process.env.USER,
  // PASSWORD: process.env.PASSWORD,
  // DB: process.env.DB,
  DIALECT: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
