export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const UPDATE_COMMENT_VOTE = "UPDATE_COMMENT_VOTE"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const ADD_COMMENT = "ADD_COMMENT"

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

export function disableComment(comment){
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function setComment(comment){
    return {
        type: ADD_COMMENT,
        comment,
    }
}