import express from "express";

// initialize express app
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;


// dummby database
const posts = [
  {
    id: 1,
    title: "my post one",
    desc: "my lovely post",
  },
  {
    id: 2,
    title: "my post two",
    desc: "my lovely post",
  },
  {
    id: 3,
    title: "my post three",
    desc: "my lovely post",
  },
  {
    id: 4,
    title: "my post four",
    desc: "my lovely post",
  },
];

// basic express routing
app.get("/", (req, res) => {
  res.send("<h1>Hello Cohort 4 api development</h1>");
});
// app.get("/about", (req, res) => {
//   res.send("<h1>This is about us page</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>This is contact us page</h1>");
// });

/// get all posts
app.get("/api/v1/posts", (req, res) => {
  // res.send(posts)
  res.status(200).json({
    posts,
    message: "Post successfully retrieved",
  });
});

// get a single post
app.get("/api/v1/posts/:id", (req, res) => {
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
});

// delete a single post
app.delete("/api/v1/posts/:id", (req, res) => {
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
});
// create new post
app.post("/api/v1/posts", (req, res) => {
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
});

// update post
app.put("/api/v1/posts/:id", (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
