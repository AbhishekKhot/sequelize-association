const db = require("../models");
const { NotFoundError } = require("../lib/serverErrors");

class UserService {
  async getAllUser() {
    return db.User.findAll({
      where: {},
      include: [
        {
          model: db.Post,
          where: {},
        },
      ],
    });
  }

  async getSingleUser(params) {
    const user = await db.User.findByPk(params.id, {
      where: {},
      include: [
        {
          model: db.Post,
          where: {},
        },
      ],
    });
    if (!user) throw new NotFoundError("User not found with id: " + params.id);
    return user;
  }

  async addUser(body) {
    const newUser = {
      name: body.name,
      email: body.email,
      password: body.password,
    };
    return db.User.create(newUser);
  }

  async deleteUser(params) {
    const user = await db.User.findByPk(params.id);
    if (!user) throw new NotFoundError("User not found with id: " + params.id);
    return db.User.destroy({
      where: { id: params.id },
    });
  }

  async updateUser(params, body) {
    const user = await db.User.findByPk(params.id);
    if (!user) throw new NotFoundError("User not found with id: " + params.id);
    return db.User.update(body, {
      where: { id: params.id },
    });
  }
}

module.exports = new UserService();
