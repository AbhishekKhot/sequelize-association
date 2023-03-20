const User = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["name", "email", "password"],
};

const addUserSchema = {
  body: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
    required: ["name", "email", "password"],
  },
};

const getSingleUserSchema = {
  schema: {
    response: {
      200: User,
    },
  },
};

const getAllUsersSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        users: User,
      },
    },
  },
};

const updateUserSchema = {
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

const deleteUserSchema = {
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
  addUserSchema,
  getSingleUserSchema,
  getAllUsersSchema,
  updateUserSchema,
  deleteUserSchema,
};
