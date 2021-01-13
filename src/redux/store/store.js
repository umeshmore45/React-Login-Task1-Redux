import { createStore, applyMiddleware } from "redux";
import signUp from "../middleware/Signup";
import rootReducer from "../reducer/root.reducer";
import logger from "redux-logger";
const store = createStore(rootReducer, applyMiddleware(logger, signUp));

export default store;
