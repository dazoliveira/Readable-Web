export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE_COMMENT_VOTE = 'UPDATE_COMMENT_VOTE'

export function receivePostComments(comments){
    return{
        type: RECEIVE_COMMENTS,
        comments
    }
}

export function setCommentVote(comment){
    return{
        type: UPDATE_COMMENT_VOTE,
        comment
    }
}