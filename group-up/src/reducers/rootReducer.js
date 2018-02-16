import { combineReducers } from "redux";
import authReducer from "./authReducer";

// the mother of all reducers. when you add a reducer make sure to add it to this function
const rootReducer = combineReducers({ authReducer });

export default rootReducer;
