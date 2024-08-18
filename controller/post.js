import { posts } from "../utils/database.js";

//
export const getAllPosts = (req, res) => {
  res.status(200).json({
    posts,
    message: "Post successfully retrieved",
  });
};

export const getAPost = (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({
      message: `Post with the id = ${id} is not found`,
    });
  } else {
    res.status(200).json({
      post,
      message: "Post successfull retrieved",
    });
  }
};

export const deletePost = (req, res) => (req, res) => {
  const id = parseInt(req.params.id);
  let deletedPost = posts.filter((post) => post.id !== id);
  // console.log(deletedPost);
  if (!deletedPost) {
    res.status(404).json({
      message: `Post with the id = ${id} is not found`,
    });
  } else {
    res.json({
      message: `Post id = ${id} successfully deleted`,
    });
  }
};

export const createPost = (req, res) => {
  // console.log(req.body)
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    desc: req.body.desc,
  };
  posts.push(newPost);
  res.status(201).json({
    posts,
    message: "Post successfully created",
  });
};

export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({
      message: `Post with the id = ${id} is not found`,
    });
  }
  post.title = req.body.title;
  post.desc = req.body.desc;
  res.status(200).json({
    post,
    message: "Post successfully updated",
  });
};
