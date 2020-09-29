const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const port = process.env.PORT || 8008;
// var path = require("path");

// Setup Views Enginer -- Ready to Use
// app.set("views", "./views");
// app.set("view engine", "ejs");

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

// Setup Morgan
app.use(morgan("tiny"));

// Setup Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./Routes/api"));

// Routing View Engine -- Ready To Use
// Tinggal Bikin Folder Views Lalu di Export-Import Module Viewsnya,
//
// Lalu Uncomment Codingan di Bawah ini

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/page1", (req, res) => {
//   res.render("page1");
// });

// app.get("/page2", (req, res) => {
//   res.render("page2");
// });

// app.get("/page3", (req, res) => {
//   res.render("page3");
// });

// app.get("/page4", (req, res) => {
//   res.render("page4");
// });

// Listen Port
app.listen(port, () => {
  console.log(
    `🍩 bakergun-backend by 🧔https://github.com/sanengineer now running 🚀 on  http://localhost:${port}`
  );
});
