module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)        
  },
  addPost(req, res) {
    let post = req.body
    req.store.posts.push(post)
    res.status(201).send(post)
  },
  updatePost(req, res) {
    let post = req.body
    req.store.posts[req.params.postId] = req.body
    res.status(200).send(req.store.posts[req.params.postId])
  },
  removePost(req, res) {
    req.store.posts.splice(req.params.postId,1)
    res.status(200).send(req.store.posts)
  }
}