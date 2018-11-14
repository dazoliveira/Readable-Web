import { getAllPosts, getAllCategories, updateVote,
    addPost, getPostComments, updateCommentVote, getPostsPerCat,
    // getPostDetail 
} from '../utils/ReadableAPI'
import { receivePosts, setVote, setPost, postsPerCtegory, postDetail } from './posts'
import { receiveCategories } from './categories'
import { receivePostComments, setCommentVote } from './comments';


export function handlePosts() {
    return (dispatch) => {
        return getAllPosts()
            .then((data) => dispatch(receivePosts(data)))
    }
}

export function handlePostsCat(category){
    return (dispatch) => {
        return getPostsPerCat(category)
            .then(data => dispatch(postsPerCtegory(data)))
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

// export function loadPostDetails(id){
//     return (dispatch) => {
//         return getPostDetail(id)
//             .then((data) => dispatch(postDetail(data)))
//     }
// }

export function handleCategories() {
    return (dispatch) => {
        return getAllCategories()
            .then((data) => dispatch(receiveCategories(data.categories)))
    }
}


export function handlePostComments(id) {
    return (dispatch) => {
        return getPostComments(id)
            .then((data) => dispatch(receivePostComments(data)))
     }
}

export function voteComment(id, option) {
    return (dispatch) => {
        return updateCommentVote(id, option)
            .then((data) => {
                dispatch(setCommentVote(data))
            })
    }
}