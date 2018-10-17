export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function categories(categories){
    return{
        type: RECEIVE_CATEGORIES,
        categories
    }
}