const express = require("express");

const router = express.Router();

// /admin/
router.get("/", (req, res, next) => {
  res.send("<h1>Hello from blog</h1>");
});

module.exports = router;
