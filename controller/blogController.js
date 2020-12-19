exports.blogHome = (req, res, next) => {
  res.render("blog", {
    title: "Posts",
  });
};

exports.blogCreatePost = (req, res, next) => {
  res.render("createPost", {
    title: "Create Post",
  });
};

exports.createPost = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
