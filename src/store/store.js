import {applyMiddleware, combineReducers, createStore} from "redux";
import {wednesdayReducer} from "./wednesdayReducer";
import {loadingReducer} from "./loadingReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    preloader: loadingReducer,
    wednesday: wednesdayReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store