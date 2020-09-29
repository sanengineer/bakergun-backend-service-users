const post = require("../Models/players-model");

module.exports = {
  players: async (req, res) => {
    await post
      .getPosts()
      .then((posts) => res.json(posts))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  },

  player: async (req, res) => {
    const id = req.params.id;

    await post
      .getPost(id)
      .then((post) => res.json(post))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  },

  postplayer: async (req, res) => {
    await post
      .insertPost(req.body)
      .then((post) =>
        res.status(201).json({
          message: `Database #${post.id} has been created`,
          content: post,
        })
      )
      .catch((err) =>
        res.status(500).json({
          message: err.message,
        })
      );
  },

  putplayer: async (req, res) => {
    const id = req.params.id;

    await post
      .updatedPost(id, req.body)
      .then((post) =>
        res.json({
          message: `Database #${id} has been update`,
          content: post,
        })
      )
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({
            message: err.message,
          });
        }
      });
  },

  deleteplayer: async (req, res) => {
    const id = req.params.id;

    await post
      .deletePost(id)
      .then((post) =>
        res.json({
          message: `Database #${id} has been deleted`,
        })
      )
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({
            message: err.message,
          });
        }
        res.status(500).json({ message: err.message });
      });
  },
};
