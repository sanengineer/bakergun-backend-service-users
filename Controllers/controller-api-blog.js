const post = require("../Models/blog-model");

module.exports = {
  posts: async (req, res) => {
    await post
      .getPostsBlog()
      .then((posts) => res.json(posts))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  },

  post: async (req, res) => {
    const id = req.params.id;

    await post
      .getPostBlog(id)
      .then((post) => res.json(post))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  },
};
