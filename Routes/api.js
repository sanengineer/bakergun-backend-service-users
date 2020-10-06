const express = require("express");
const router = express.Router();

router.use("/api/v1/users", require("./users"));

module.exports = router;
