let initialState = {
    style: 'Брют'
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STYLE':
            return {
                ...state,
                style: action.style
            }
        default:
            return state
    }
}

export default settingsReducer