import authModel from './authModel';

const {
  login: { formField: { email, password } },
  register: { formField: { username, registerEmail, registerPassword } },
} = authModel;

export default {
  loginInitialValues: {
    [email.name]: '',
    [password.name]: '',
  },
  registerInitialValues: {
    [username.name]: '',
    [registerEmail.name]: '',
    [registerPassword.name]: '',
  },
};
