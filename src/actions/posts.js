export const RECEIVE_POSTS = "REICIVE_POSTS"
export const SORT_POST_BY_DATE = "SORT_POST_BY_DATE"
export const SORT_POST_BY_SCORE = "SORT_POST_BY_SCORE"
export const UPDATE_VOTE_SCORE = "UPDATE_VOTE_SCORE"


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

export function sortPostByDate(posts) {
    return {
        type: SORT_POST_BY_DATE,
        posts,
    }
}

export function sortPostByScore(posts) {
    return {
        type: SORT_POST_BY_SCORE,
        posts,
    }
}

export function setVote(post){
    return {
        type: UPDATE_VOTE_SCORE,
        post,
    }
}


