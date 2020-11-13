const express = require("express");
const db = require("./Models");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// require("dotenv").config();

// api router
const indexRout = require("./Routes/index");
const apiRout = require("./Routes/api");

// Static Files
// app.use(express.static("./Public"));
app.use(express.static(path.join(__dirname, "./Public"))); // Masih Belum Ngerti Maksud Harus ngasih __dirname

// Configure CORS
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://bakergun-frontend.vercel.app",
    "https://editor.swagger.io/",

    // Configure cors for local machine
    // "http://localhost:3000",
    // "http://127.0.0.1:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, DELETE, PUT, POST, PATCH, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,  Authorization, Accept"
  );

  return next();
});

// Setup Express
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", apiRout);
app.use("/", indexRout);

// Sync Database
//
db.sequelize.sync().then(() => {
  console.log("");
  console.log(`\x1b[91mSuccesfully Sync Database\x1b[91m`);
  console.log("\x1b[93m\x1b[39m");
  console.log("");
});

// Drop And ♻️  Resync Database
//
// db.sequelize
//   .sync({
//     force: true,
//   })
//   .then(() => {
//     console.log("");
//     console.log(`\x1b[91mSuccesfully 🔥 Drop And ♻️  Resync Database\x1b[91m`);
//     console.log("");
//   });

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
