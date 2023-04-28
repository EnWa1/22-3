export const nameReducer = (state = { name: 'Adil' }, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        default:
            return state
    }
}
