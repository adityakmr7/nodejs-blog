const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const blogRoute = require("./routes/blog");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use("/", blogRoute);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Our Project is running on port ${PORT}`));
