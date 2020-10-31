const jwt = require("jsonwebtoken");

const secret = "sanodesecret";

// generate JWT saat login, jwt token ini disimpan di localStorage browser milik client
const generateJwt = (payload) => {
  return jwt.sign(payload, secret);
};

// verifikasi token dari client
const verifyJwt = (token) => {
  return jwt.verify(token, secret);
};

module.exports = {
  generateJwt,
  verifyJwt,
};
