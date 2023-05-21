import axios from "axios"

export const CommentsDispatch = (payload) => ({type: "CHANGE_COMMENTS", payload})

export const commentsReducer = (state={
    currentComments: null
}, action) => {
    if(action.type === "CHANGE_COMMENTS") {
        return {
            currentComments: action.payload
        }
    }
    return state
}

export const fetchComments = (URL) => {
    return dispatch => {
        axios.get(URL).then(resp =>
            dispatch(CommentsDispatch(resp.data))
        )
    }
}