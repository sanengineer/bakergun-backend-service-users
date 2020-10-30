const express = require("express");
const db = require("./Models");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

// api router
const apiRout = require("./Routes/api");

// Static Files
// app.use(express.static("./Public"));
app.use(express.static(path.join(__dirname, "./Public"))); // Masih Belum Ngerti Maksud Harus ngasih __dirname

// Configure CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Setup Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", apiRout);

db.sequelize
  // .sync().then(() => {
  //   console.log("");
  //   console.log(`\x1b[91mSuccesfully Sync Database\x1b[91m`);
  //   console.log("\x1b[93m\x1b[39m");
  //   console.log("");
  // });
  .sync({
    force: true,
  })
  .then(() => {
    console.log("");
    console.log(`\x1b[91mSuccesfully 🔥 Drop And ♻️  Resync Database\x1b[91m`);
    console.log("");
  });

// Listen Port
app.listen(port, () => {
  console.log("");
  console.log(
    `\x1b[93mBackend Server now running 🚀 on  http://localhost:${port}\x1b[39m`
  );
  console.log(
    `\x1b[93mEndpoint RestAPI now running 🚀 on  http://localhost:${port}/api/v1\x1b[39m`
  );
  console.log(
    "\x1b[93mBuild by\x1b[39m \x1b[91mhttps://github.com/sanengineer\x1b[91m \x1b[93mgive ⭐️ start, 🍴 fork and 🧲 clone others repository\x1b[39m."
  );
  console.log("");
});
