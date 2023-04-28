export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { ...state, count: state.count + action.payload }
        case 'DECREASE_COUNT':
            return { ...state, count: state.count - action.payload }
        default:
            return state
    }
}
