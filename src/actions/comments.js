export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function comments(comments){
    return{
        type: RECEIVE_COMMENTS,
        comments
    }
}