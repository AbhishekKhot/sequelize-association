const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(model) {
      Post.belongsTo(model.User, { onDelete: "CASCADE" });
    }
  }

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      body: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );
  return Post;
};
