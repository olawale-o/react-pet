export default {
  name: 'auth',
  login: {
    formField: {
      email: {
        name: 'email',
        error: {
          required: 'Email is required',
        },
      },
      password: {
        name: 'password',
        error: {
          required: 'Password is required',
        },
      },
    },
  },
  register: {
    formField: {
      registerEmail: {
        name: 'email',
        error: {
          required: 'Email is required',
        },
      },
      username: {
        name: 'username',
        error: {
          required: 'Username is required',
        },
      },
      registerPassword: {
        name: 'password',
        error: {
          required: 'Password is required',
        },
      },
    },
  },
};
