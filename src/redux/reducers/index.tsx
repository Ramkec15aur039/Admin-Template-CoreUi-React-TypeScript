import { combineReducers } from "redux";
import changeState from "./changeStateReducer";
import testReducer from "./testReducer"
import storeUserDataReducer from "./storeUserDataReducer"

const allReducer = combineReducers({
  change_State: changeState,
  test: testReducer,
  userDetail:storeUserDataReducer
});

export default allReducer;
