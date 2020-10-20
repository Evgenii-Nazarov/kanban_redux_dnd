import {createStore, applyMiddleware} from "redux";
import kanban from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    kanban,
    composeWithDevTools(applyMiddleware())
);

export default store;