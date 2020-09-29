const post = require("../Models/gameboard-model");

module.exports = {
  assets: async (req, res) => {
    await post
      .getPostsGameboard()
      .then((posts) => res.json(posts))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  },

  // 
  // Untuk: Data/gameboard-array-of-object.json
  //
  //
  // asset: async (req, res) => {
  //   const id = req.params.id;
  //   const id = posts.find((i) => i.id + req.params.id);

  //   await post
  //     .getPostGameboard(id)
  //     .then((post) => res.json(post))
  //     .catch((err) => {
  //       if (err.status) {
  //         res.status(err.status).json({ message: err.message });
  //       } else {
  //         res.status(500).json({ message: err.message });
  //       }
  //     });
  // },
};
