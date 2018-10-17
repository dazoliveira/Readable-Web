import { getAllPosts, getAllCategories } from '../utils/ReadableAPI'
import { receivePosts } from './posts'
import { receiveComments } from './comments'


export function handlePosts() {
    return (dispacth) => {
        return getAllPosts()
            .then(dispacth((data) => receivePosts(data)))
    }
}

export function handleCategories() {
    return (dispacth) => {
        return getAllCategories()
            .then(dispacth((data) => receiveComments(data)))
    }
}