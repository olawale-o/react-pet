import * as Yup from 'yup';
import authModel from './authModel';

const {
  login: { formField: { email, password } },
  register: { formField: { username, registerEmail, registerPassword } },
} = authModel;

export default {
  loginSchema: () => Yup.object().shape({
    [email.name]: Yup.string().required(email.error.required).label(email.name),
    [password.name]: Yup.string().required(password.error.required).label(password.name),
  }),
  registerSchema: () => Yup.object().shape({
    [username.name]: Yup.string().required(username.error.required).label(username.name),
    [registerEmail.name]: Yup.string().required(registerEmail.error.required)
      .label(registerEmail.name),
    [registerPassword.name]: Yup.string().required(registerPassword.error.required)
      .label(registerPassword.name),
  }),
};
