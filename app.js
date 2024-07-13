import express from "express";

// initialize express app
const app = express();
const PORT = 5000;

// dummby database
const posts = [
  {
    id: 1,
    title: "my post one",
  },
  {
    id: 2,
    title: "my post two",
  },
  {
    id: 3,
    title: "my post three",
  },
  {
    id: 4,
    title: "my post four",
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

// get a single
app.get("/api/v1/posts/:id", (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);
  res.send(posts.filter((post) => post.id === id));
});

app.delete("/api/v1/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deletedPost = posts.filter((post) => post.id !== id);
  console.log(deletedPost)
  res.json({
    message: `Post id = ${id} successfully deleted`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
