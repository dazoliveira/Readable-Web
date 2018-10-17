export const RECEIVE_POSTS = "REICIVE_POSTS"

export function receivePosts(posts){
    return{
        type: RECEIVE_POSTS,
        posts
    }
}


