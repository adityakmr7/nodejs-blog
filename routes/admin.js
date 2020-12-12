const express = require("express");
const path = require("path");
const router = express.Router();

// /admin/
router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "admin.html"));
  res.render("admin");
});

module.exports = router;
