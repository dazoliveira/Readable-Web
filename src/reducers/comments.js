import { RECEIVE_COMMENTS, UPDATE_COMMENT_VOTE } from '../actions/comments'

export default function comments(state = [], action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case UPDATE_COMMENT_VOTE:
            return state.map((item) => {
                if (item.id === action.comment.id) {
                    return {
                        ...item,
                        ...action.comment,
                    }
                }
                return item
            })
        default:
            return state
    }
}