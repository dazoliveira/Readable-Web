import {
    RECEIVE_POSTS,
    ADD_POST,
    UPDATE_VOTE_SCORE,
    SORT_POST_BY_VOTES,
    DISABLE_POST,
    EDIT_POST,
} from '../actions/posts'
import { ADD_COMMENT, DELETE_COMMENT } from '../actions/comments';

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case SORT_POST_BY_VOTES:
            const result = state.sort((a, b) => b.voteScore - a.voteScore)
            return [...result]
        case UPDATE_VOTE_SCORE:
            return state.map((item) => {
                if (item.id === action.post.id) {
                    return {
                        ...item,
                        ...action.post,
                    }
                }
                return item
            })
        case ADD_POST:
            return state.concat(action.post)
        case DISABLE_POST:
            return state.filter(item => item.id !== action.post.id)
        case EDIT_POST:
            return state.map((item) => {
                if (item.id === action.post.id) {
                    return {
                        ...item,
                        ...action.post,
                    }
                }
                return item
            })
        case ADD_COMMENT:
            return state.map(item => {
                if (item.id === action.comment.parentId) {
                    item.commentCount = item.commentCount + 1
                }
                return item
            })
        case DELETE_COMMENT:
            return state.map(item => {
                if (item.id === action.comment.parentId) {
                    item.commentCount = item.commentCount - 1
                }
                return item
            })
        default:
            return state
    }
}