const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// load user model
const db = require("../Models");
const UserGame = db.userGame;

console.log(
  `\n  This is execute table name on passport.js :\n\n     ✅ Table Name:`,
  UserGame,
  "\n\n"
);

module.exports = function (passport) {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: "nodeauthsec",
  };
  passport.use(
    "jwt",
    new JwtStrategy(options, function (jwt_payload, done) {
      UserGame.findAll(jwt_payload.id)
        // UserGame.findByPk(jwt_payload.id) // kalo di ganti sama findByPk ada respon unauthorized.
        .then((user) => {
          return done(null, user);
        })
        .catch((error) => {
          return done(error, false);
        });
    })
  );
};
