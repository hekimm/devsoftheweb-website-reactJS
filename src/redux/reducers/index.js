import { combineReducers } from "redux";
import contactReducer from "../reducers/contactReducer";

const rootReducer = combineReducers({
  contact: contactReducer
});

export default rootReducer;
