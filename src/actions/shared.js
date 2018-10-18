import { getAllPosts, getAllCategories } from '../utils/ReadableAPI'
import { receivePosts } from './posts'
import { receiveCategories } from './categories'
// import { receiveComments } from './comments'


export function handlePosts() {
    return (dispatch) => {
        return getAllPosts()
            .then((posts) => dispatch(receivePosts(posts)))
    }
}

export function handleCategories() {
    return (dispatch) => {
        return getAllCategories()
            .then((data) => dispatch(receiveCategories(data.categories)))
    }
}