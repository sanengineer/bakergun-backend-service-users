module.exports = {
  HOST: "ec2-34-206-252-187.compute-1.amazonaws.com",
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
