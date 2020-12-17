const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
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