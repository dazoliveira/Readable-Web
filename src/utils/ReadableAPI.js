const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
      token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
      'Authorization': token
}


export const getAllPosts = () =>
      fetch(`${api}/posts`, { headers })
            .then(res => res.json())
            .then(data => data)


export const getPostsPerCat = (category) =>
      fetch(`${api}/${category}/posts`, { headers })
            .then(res => res.json())
            .then(data => data)


export const getPostDetail = (id) =>
      fetch(`${api}/posts/${id}`, { headers })
            .then(res => res.json())
            .then(data => data)


export const updateVote = (id, option) =>
      fetch(`${api}/posts/${id}`, {
            method: 'POST',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({ option })
      }).then(res => res.json())
            .then(data => data)


export const addPost = (post) =>
      fetch(`${api}/posts`, {
            method: 'POST',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
      }).then(res => res.json())
            .then(data => data)


export const removePost = (id) =>
      fetch(`${api}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
      }).then(res => res.json())
            .then(data => data)


export const changePost = (post, id) =>
      fetch(`${api}/posts/${id}`, {
            method: 'PUT',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
      }).then(res => res.json())
            .then(data => data)


export const getAllCategories = () =>
      fetch(`${api}/categories`, { headers })
            .then(res => res.json())
            .then(data => data)


export const getPostComments = (id) =>
      fetch(`${api}/posts/${id}/comments`, { headers })
            .then(res => res.json())
            .then(data => data)


export const updateCommentVote = (id, option) =>
      fetch(`${api}/comments/${id}`, {
            method: 'POST',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({ option })
      }).then(res => res.json())
            .then(data => data)


export const removeComment = (id) =>
      fetch(`${api}/comments/${id}`, {
            method: 'DELETE',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
      }).then(res => res.json())
            .then(data => data)


export const newComment = (comment) =>
      fetch(`${api}/comments`, {
            method: 'POST',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
      }).then(res => res.json())
            .then(data => data)


export const changeComment = (id, comment) =>
      fetch(`${api}/comments/${id}`, {
            method: 'PUT',
            headers: {
                  ...headers,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
      }).then(res => res.json())
            .then(data => data)
