import * as api from "../dal/requestApi";
import styles from "../components/Wednesday/Wednesday.module.css";

let initialState = {
    themes: [
        {name: 'Brut', checked: false, class: styles.brut},
        {name: 'Rose', checked: true, class: styles.rose},
        {name: 'Bordeaux', checked: false, class: styles.bordo}
    ],
    response: '',
    isFetching: false,
    class: styles.rose
}

export const wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                themes: state.themes.map(theme => theme.class === action.class
                    ? {...theme, checked: true}
                    : {...theme, checked: false}
                ),
                class: state.themes.find(theme => theme.class === action.class).class
            }
        case 'SET_RESPONSE':
            return {
                ...state,
                response: action.response
            }
        case 'RESPONSE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'CHANGE_CLASS':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const changeTheme = (classAsValue) => ({type: 'CHANGE_THEME', class: classAsValue})
const responseIsFetching = (isFetching) => ({type: 'RESPONSE_IS_FETCHING', isFetching})
const setResponse = (response) => ({type: 'SET_RESPONSE', response})

export const setRequest = (isDone) => (dispatch) => {
    dispatch(responseIsFetching(true))
    api.request(isDone).then(response => {
        dispatch(setResponse(response))
        dispatch(responseIsFetching(false))
    })
}