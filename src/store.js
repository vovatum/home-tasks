import {combineReducers, createStore} from "redux";
import settingsReducer from "./settingsReducer";

const initialState = {
    loading: true
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

let reducers = combineReducers({
    preloader: loadingReducer,
    settings: settingsReducer
})

const store = createStore(reducers)

export default store