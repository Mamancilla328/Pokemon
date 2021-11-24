import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
