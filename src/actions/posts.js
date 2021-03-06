export const RECEIVE_POSTS = "REICIVE_POSTS"
export const POSTS_PER_CATEGORIES = "POSTS_PER_CATEGORIES"
export const UPDATE_VOTE_SCORE = "UPDATE_VOTE_SCORE"
export const ADD_POST = "ADD_POST"
export const SORT_POST_BY_VOTES = "SORT_POST_BY_VOTES"
export const DISABLE_POST = "DISABLE_POST"
export const EDIT_POST = "EDIT_POST"


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function postsPerCtegory(posts){
    return{
        type: RECEIVE_POSTS,
        posts,
    }
}

export function sortPost(){
    return {
        type: SORT_POST_BY_VOTES
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

export function disablePost(post){
    return{
        type: DISABLE_POST,
        post,
    }
}

export function setEditPost(post){
    return{
        type: EDIT_POST,
        post,
    }
}


