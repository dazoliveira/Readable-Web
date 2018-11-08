export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function receivePostComments(comments){
    return{
        type: RECEIVE_COMMENTS,
        comments
    }
}