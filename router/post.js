import express from "express";
import {
  getAllPosts,
  getAPost,
  deletePost,
  createPost,
  updatePost,
} from "../controller/post.js";

const router = express.Router();

/// get all posts
router.get("/", getAllPosts);

// get a single post
router.get("/:id", getAPost);

// delete a single post
router.delete("/:id", deletePost);

// create new post
router.post("/", createPost);

// update post
router.put("/:id", updatePost);

export default router;
