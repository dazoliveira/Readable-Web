export const RECEIVE_POSTS = "REICIVE_POSTS"
export const SORT_POST_BY_DATE =  "SORT_POST_BY_DATE"

export function receivePosts(posts){
    return{
        type: RECEIVE_POSTS,
        posts
    }
}

export function sortPostByDate(){
    return{
        type: SORT_POST_BY_DATE
    }
}


