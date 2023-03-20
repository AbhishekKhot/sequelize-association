const Post = {
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    body: {
      type: "string",
    },
  },
  required: ["title", "body"],
};

const addPostSchema = {
  body: {
    type: "object",
    properties: {
      title: {
        type: "string",
      },
      body: {
        type: "string",
      },
    },
    required: ["title", "body"],
  },
};

const getSinglePostSchema = {
  schema: {
    response: {
      200: Post,
    },
  },
};

const getAllPostsSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        posts: Post,
      },
    },
  },
};

const updatePostSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

const deletePostSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

module.exports = {
  addPostSchema,
  getSinglePostSchema,
  getAllPostsSchema,
  updatePostSchema,
  deletePostSchema,
};
