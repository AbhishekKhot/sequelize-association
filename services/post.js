const db = require("../models");
const { NotFoundError } = require("../lib/serverErrors");

class PostService {
  async getAllPosts() {
    return db.Post.findAll();
  }

  async getSinglePost(params) {
    const post = await db.Post.findByPk(params.id);
    if (!post) throw new NotFoundError("Post not found with id: " + params.id);
    return post;
  }

  async addPost(body) {
    const newPost = {
      title: body.title,
      body: body.body,
      UserId: body.UserId,
    };
    return db.Post.create(newPost);
  }

  async deletePost(params) {
    const post = await db.Post.findByPk(params.id);
    if (!post) throw new NotFoundError("Post not found with id: " + params.id);
    return db.Post.destroy({
      where: { id: params.id },
    });
  }

  async updatePost(params, body) {
    const post = await db.Post.findByPk(params.id);
    if (!post) throw new NotFoundError("Post not found with id: " + params.id);
    return db.Post.update(body, {
      where: { id: params.id },
    });
  }
}

module.exports = new PostService();
