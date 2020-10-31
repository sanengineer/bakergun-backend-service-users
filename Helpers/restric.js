const passport = require("passport");
require("../Config/passport")(passport);

module.exports = passport.authenticate("jwt", { session: false });
