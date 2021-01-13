import { createStore, applyMiddleware } from "redux";
import signUp from "../middleware/Signup";
import rootReducer from "../reducer/root.reducer";
// import logger from "redux-logger";
import logIn from "../middleware/Login";
const store = createStore(rootReducer, applyMiddleware(signUp, logIn));

export default store;
