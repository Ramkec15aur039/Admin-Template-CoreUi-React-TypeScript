import { combineReducers } from "redux";
import changeState from "./changeStateReducer";
import testReducer from "./testReducer"

const allReducer = combineReducers({
  change_State: changeState,
  test: testReducer
});

export default allReducer;
