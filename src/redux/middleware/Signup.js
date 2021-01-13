import axios from "axios";

export const signUpUrl = "http://localhost:5000/users/signup";

const signUp = (store) => (next) => async (action) => {
  await axios
    .post(signUpUrl, {
      email: action.playload.user.email,
      password: action.playload.user.password,
      confirmPassword: action.playload.user.confirmPassword,
    })
    .then((response) => {
      console.log(response);
      action.playload = {
        user: { ...response.data.data },
      };
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

  return next(action);
};

export default signUp;
