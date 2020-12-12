const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const blogRoute = require("./routes/blog");
const ejs = require("ejs");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/admin", adminRoute);
app.use("/", blogRoute);

app.use((req, res, next) => {
  res.status(404).render("404");
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Our Project is running on port ${PORT}`));
