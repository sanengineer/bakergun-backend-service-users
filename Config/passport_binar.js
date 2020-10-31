const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// load user model
const User = require("../Models");

module.exports = function (passport) {
  const options = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: "sanodeauthsecret",
  };

  passport.use(
    "jwt",
    new JwtStrategy(options, async (payload, done) => {
      User.findByPk(payload.id)
        .then((user) => {
          return done(null, user);
        })
        .catch((error) => {
          return done(error, false);
        });
    })
  );
};
