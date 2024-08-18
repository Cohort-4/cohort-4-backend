import express from "express";
import postRoute from "./router/post.js"

// initialize express app
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;



app.use("/api/v1/posts", postRoute);


app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
