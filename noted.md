
### Refactoring
-----------------
- Create a separate posts.js in routes folder for router
- Validate all fields
- `if(!newPost.title){
- return res.status(400).json({message: "title cannot be empty"})
- }`

#### get single post route
- use of find() to find post
- create a condition to handle `404 error` or if no post is found    