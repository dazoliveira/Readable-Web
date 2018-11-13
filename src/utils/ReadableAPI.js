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

// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)

// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())
