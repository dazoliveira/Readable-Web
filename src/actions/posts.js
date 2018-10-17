export const RECEIVE_POSTS = "REICIVE_POSTS"

export function posts(posts){
    return{
        type: RECEIVE_POSTS,
        posts
    }
}