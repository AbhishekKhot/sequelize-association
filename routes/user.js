const {
  addUserSchema,
  getSingleUserSchema,
  getAllUsersSchema,
  updateUserSchema,
  deleteUserSchema,
} = require("../controllers/schema/user");

const {
  getUserHandler,
  getAllUserHandler,
  addUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../controllers/handler/user");

module.exports = (fastify, options, done) => {
  
  fastify.get("/:id", {
    schema: getSingleUserSchema,
    handler: getUserHandler,
  });
 
  fastify.get("/", {
    schema: getAllUsersSchema,
    handler: getAllUserHandler,
  });
 
  fastify.post("/addUser", {
    schema: addUserSchema,
    handler: addUserHandler,
  });
  
  fastify.delete("/:id", {
    schema: deleteUserSchema,
    handler: deleteUserHandler,
  });
 
  fastify.put("/:id", {
    schema: updateUserSchema,
    handler: updateUserHandler,
  });
  done();
};
