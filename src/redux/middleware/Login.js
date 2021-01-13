import axios from "axios";

export const logInurl = "http://localhost:5000/users/login";

const logIn = (store) => (next) => async (action) => {
  axios
    .post(logInurl, {
      email: action.playload.user.email,
      password: action.playload.user.password,
    })
    .then((response) => {
      action.play = {
        jwt: response.data.data[0].jwt,
      };
      return next(action);
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

export default logIn;
