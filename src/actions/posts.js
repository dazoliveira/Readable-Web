export const RECEIVE_POSTS = "REICIVE_POSTS"
export const POSTS_PER_CATEGORIES = "POSTS_PER_CATEGORIES"
export const UPDATE_VOTE_SCORE = "UPDATE_VOTE_SCORE"
export const ADD_POST = "ADD_POST"
// export const POST_DETAIL = "POST_DETAIL"


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function postsPerCtegory(posts){
    return{
        type: POSTS_PER_CATEGORIES,
        posts,
    }
}

export function setVote(post){
    return {
        type: UPDATE_VOTE_SCORE,
        post,
    }
}

export function setPost(post){
    return {
        type: ADD_POST,
        post,
    }
}

// export function postDetail(post){
//     return{
//         type: POST_DETAIL,
//         post,
//     }
// }


