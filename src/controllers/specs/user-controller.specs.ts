export const UserProfileSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'number' },
    email: { type: 'string' },
    name: { type: 'string' },
  },
};

// TODO(jannyHou): This is a workaround to manually
// describe the request body of 'Users/login'.
// We should either create a Credential model, or
// infer the spec from User model

const CredentialsSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 8,
    },
  },
};

export const usersSchema = {
  type: 'object',
  required: ['username', 'email', 'password', 'name', 'lastname'],
  properties: {
    username: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 8,
    },
    name: {
      type: 'string',
    },
    lastname: {
      type: 'string',
    },
  },
};

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': { schema: CredentialsSchema },
  },
};

export const UserRequestBody = {
  description: 'User Profile',
  required: true,
  content: {
    'application/json': { schema: usersSchema },
  },
};
