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

  app.put("/api/v1/upvotes/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const post = await Post.findOne({ _id: id });

      await Post.updateOne(post, {
        $inc: { upVotes: 1 },
        function(err, res) {
          if (err) throw err;
          res.send("Successfully updated");
        },
      });
      res.status(200).send(post);
    } catch (error) {
      res.status(422).send(err);
    }
  });

  app.put("/api/v1/downvotes/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const post = await Post.findOne({ _id: id });

      await Post.updateOne(post, {
        $inc: { downVotes: 1 },
        function(err, res) {
          if (err) throw err;
          res.send("Successfully updated");
        },
      });
      res.status(200).send(post);
    } catch (error) {
      res.status(422).send(err);
    }
  });
};
