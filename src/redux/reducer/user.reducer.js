import { userActionType } from "../constant/userAction.types";

const intialState = {
  users: [],
  jwtToken: "",
};

const userReducer = (state = intialState, action) => {
  console.log(action);
  let { play } = action;
  console.log(play);
  switch (action.type) {
    case userActionType.SIGNUP:
      return {
        ...state,
        users: { ...action.playload.user },
      };

    case userActionType.LOGIN:
      return {
        ...state,
        jwtToken: "Hello",
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
