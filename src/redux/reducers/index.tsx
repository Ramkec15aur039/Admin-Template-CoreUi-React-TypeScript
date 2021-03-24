import { combineReducers } from "redux";
import changeState from "./changeStateReducer";

const allReducer = combineReducers({
  change_State: changeState,
});

export default allReducer;
