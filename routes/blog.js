const express = require("express");
const path = require("path");
const blogController = require("../controller/blogController");
const router = express.Router();

// /admin/
router.get("/", blogController.blogHome);

router.get("/create-post", blogController.blogCreatePost);
router.post("/create", blogController.createPost);

module.exports = router;
