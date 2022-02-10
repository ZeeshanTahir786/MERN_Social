const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getAllPosts,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);

router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .delete(isAuthenticated, deletePost);

router.route("/all/posts").get(isAuthenticated, getAllPosts);

module.exports = router;
