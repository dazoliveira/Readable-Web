import { RECEIVE_POSTS } from '../actions/posts'
import { SORT_POST_BY_DATE } from '../actions/posts'

export default function posts(state = {}, action){
    switch (action.type){
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case SORT_POST_BY_DATE:
            return{
                ...state,
                ppost: Object.keys(...state.posts).sort((a, b) => state.posts[b].timestamp - state.posts[a].timestamp)
            }
        default:
            return state
    }
}