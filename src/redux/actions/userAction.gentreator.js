import { userActionType } from "../constant/userAction.types";

const userActionGentretor = (actionType, playload = {}) => {
  switch (actionType) {
    case userActionType.SIGNUP:
      return {
        type: userActionType.SIGNUP,
        playload: { ...playload },
      };

    case userActionType.LOGIN:
      return {
        type: userActionType.LOGIN,
        playload: { ...playload },
      };

    default:
      return {
        type: "Invalid input",
      };
  }
};

export default userActionGentretor;
