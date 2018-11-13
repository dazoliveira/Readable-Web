export const RECEIVE_POSTS = "REICIVE_POSTS"
export const UPDATE_VOTE_SCORE = "UPDATE_VOTE_SCORE"
export const ADD_POST = "ADD_POST"


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
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


