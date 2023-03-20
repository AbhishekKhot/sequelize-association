const {
  addPostSchema,
  getSinglePostSchema,
  getAllPostsSchema,
  updatePostSchema,
  deletePostSchema,
} = require("../controllers/schema/post");

const {
  getPostHandler,
  getAllPostsHandler,
  addPostHandler,
  updatePostHandler,
  deletePostHandler,
} = require("../controllers/handler/post");

module.exports = (fastify, options, done) => {
  
  fastify.get("/:id", {
    schema: getSinglePostSchema,
    handler: getPostHandler,
  });
  
  fastify.get("/", {
    schema: getAllPostsSchema,
    handler: getAllPostsHandler,
  });
 
  fastify.post("/addPost", {
    schema: addPostSchema,
    handler: addPostHandler,
  });
  
  fastify.delete("/:id", {
    schema: deletePostSchema,
    handler: deletePostHandler,
  });
 
  fastify.put("/:id", {
    schema: updatePostSchema,
    handler: updatePostHandler,
  });
  done();
};
