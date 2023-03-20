const HTTPStatus = require("../../lib/HTTPStatus");
const userService = require("../../services/user");

async function getAllUserHandler(request, reply) {
  const users = await userService.getAllUser();
  reply.status(HTTPStatus.OK.code).send({ users });
}

async function getUserHandler(request, reply) {
  const user = await userService.getSingleUser(request.params);
  reply.status(HTTPStatus.OK.code).send({ user });
}

async function addUserHandler(request, reply) {
  await userService.addUser(request.body);
  reply
    .status(HTTPStatus.CREATED.code)
    .send({ message: "note added successfully" });
}

async function deleteUserHandler(request, reply) {
  await userService.deleteUser(request.params);
  reply
    .status(HTTPStatus.OK.code)
    .send({ message: "note deleted successfully" });
}

async function updateUserHandler(request, reply) {
  await userService.updateUser(request.params, request.body);
  reply
    .status(HTTPStatus.OK.code)
    .send({ message: "note updated successfully" });
}
module.exports = {
  getUserHandler,
  getAllUserHandler,
  addUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
