const HTTPStatus = require("../../lib/HTTPStatus");
const postService = require("../../services/post");

async function getAllPostsHandler(request, reply) {
  const posts = await postService.getAllPosts();
  reply.status(HTTPStatus.OK.code).send({ posts });
}

async function getPostHandler(request, reply) {
  const post = await postService.getSinglePost(request.params);
  reply.status(HTTPStatus.OK.code).send({ post });
}

async function addPostHandler(request, reply) {
  await postService.addPost(request.body);
  reply
    .status(HTTPStatus.CREATED.code)
    .send({ message: "note added successfully" });
}

async function deletePostHandler(request, reply) {
  await postService.deletePost(request.params);
  reply
    .status(HTTPStatus.OK.code)
    .send({ message: "note deleted successfully" });
}

async function updatePostHandler(request, reply) {
  await postService.updatePost(request.params, request.body);
  reply
    .status(HTTPStatus.OK.code)
    .send({ message: "note updated successfully" });
}
module.exports = {
  getPostHandler,
  getAllPostsHandler,
  addPostHandler,
  updatePostHandler,
  deletePostHandler,
};
