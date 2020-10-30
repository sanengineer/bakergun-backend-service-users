const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt

// load user model
const User = require("../Models").User;

module.exports = function (passport) {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: "nodeauthsec",
  };
  passport.use(
    "jwt",
    new JwtStrategy(options, function (jwt_payload, done) {
      User.findByPk(jwt_payload.id)
        .then((user) => {
          return done(null, user);
        })
        .catch((error) => {
          return done(error, false);
        });
    })
  );
};
