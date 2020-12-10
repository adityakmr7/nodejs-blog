const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const blogRoute = require("./routes/blog");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use("/", blogRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Our Project is running on port ${PORT}`));
