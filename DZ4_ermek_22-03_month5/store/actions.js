export const increaseCount = (value) => ({
    type: 'INCREASE_COUNT',
    payload: value,
})

export const decreaseCount = (value) => ({
    type: 'DECREASE_COUNT',
    payload: value,
})

export const changeName = (value) => ({
    type: 'CHANGE_NAME',
    payload: value,
})
