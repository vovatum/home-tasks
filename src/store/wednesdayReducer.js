import * as api from "../dal/postSendApi";
import styles from "../components/Wednesday/Wednesday.module.css";

let initialState = {
    themes: [
        {name: 'Brut', checked: null, class: styles.brut},
        {name: 'Rose', checked: null, class: styles.rose},
        {name: 'Bordeaux', checked: true, class: styles.bordo}
    ],
    response: null,

}

export const wednesdayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-THEME':
            return {
                ...state,
                themes: state.themes.map(theme =>
                    theme.class === action.class
                        ? {...theme, checked: true}
                        : {...theme, checked: false}
                )
            }
        case 'SEND-POST':
            return {
                ...state,
                response: action.isDone
            }
        default:
            return state
    }
}

export const changeTheme = (classAsValue) => ({type: 'CHANGE-THEME', class: classAsValue})

const sendPost = (isDone) => ({type: 'SEND-POST', isDone})

export const getPostRequest = (isDone) => (dispatch) => {
    api.postSend(isDone).then(response => {
        dispatch(sendPost(response))
    })
}