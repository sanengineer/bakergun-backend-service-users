const post = require("../Models/images-model");

module.exports = {
  assets: async (req, res) => {
    await post
      .getPostsImages()
      .then((posts) => res.json(posts))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  },

  asset: async (req, res) => {
    const id = req.params.id;

    await post
      .getPostImages(id)
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
