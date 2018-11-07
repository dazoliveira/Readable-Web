import { getAllPosts, getAllCategories, updateVote, addPost } from '../utils/ReadableAPI'
import { receivePosts, setVote, setPost } from './posts'
import { receiveCategories } from './categories'
// import { receiveComments } from './comments'


export function handlePosts() {
    return (dispatch) => {
        return getAllPosts()
            .then((data) => dispatch(receivePosts(data)))
    }
}


export function votePost(id, option) {
    return (dispatch) => {
        return updateVote(id, option)
            .then((data) => {
                dispatch(setVote(data))
            })
    }
}


export function addPosts(post) {
    return (dispatch) => {
        return addPost(post)
            .then((data) => dispatch(setPost(data)))
    }
}


export function handleCategories() {
    return (dispatch) => {
        return getAllCategories()
            .then((data) => dispatch(receiveCategories(data.categories)))
    }
}