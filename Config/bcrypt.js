const bcrypt = require("bcryptjs");

const secret = bcrypt.genSaltSync(8);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, secret);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
