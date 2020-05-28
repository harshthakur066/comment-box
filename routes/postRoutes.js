const mongoose = require("mongoose");

const Post = mongoose.model("posts");

module.exports = (app) => {
  app.get("/api/v1/post", async (req, res) => {
    try {
      const posts = await Post.find();

      return res.status(200).send(posts);
    } catch (error) {
      return res.status(500).send("Server Error");
    }
  });

  app.post("/api/v1/post", async (req, res) => {
    const { name, body } = req.body;

    const post = new Post({
      name,
      body,
    });
    try {
      await post.save();
      res.status(200).send("Saved to database");
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
