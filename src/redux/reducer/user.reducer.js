import { userActionType } from "../constant/userAction.types";

const intialState = {
  users: [],
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case userActionType.SIGNUP:
      return {
        ...state,
        users: { ...action.playload.user },
      };

    case userActionType.LOGIN:
      return {
        ...state,
        users: { ...action.playload.user },
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
