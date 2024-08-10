import { combineReducers } from "redux";
import authReducer from "./auth/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers as needed
});

export default rootReducer;