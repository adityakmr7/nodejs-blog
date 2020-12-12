const express = require("express");
const path = require("path");
const router = express.Router();

// /admin/
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
