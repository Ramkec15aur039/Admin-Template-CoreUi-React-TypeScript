import { createStore } from 'redux';
import allReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(allReducer, composeWithDevTools())
export default store