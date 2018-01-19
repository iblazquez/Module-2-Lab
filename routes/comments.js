module.exports = {
  getComments(req, res) {
    res.status(200).send(req.store.posts[req.params.postId].comments)        
  }, 
  addComment(req, res) {
    let comment = req.body
    let post = req.store.posts[req.params.postId]
    let listComments = []
    if ('comments' in post) {
        listComments = post.comments
    }    
    listComments.push(comment)
    post.comments = listComments
    res.status(201).send(post)
  },
  updateComment(req, res) {
    let comment = req.body
    let post = req.store.posts[req.params.postId]
    let comments = post.comments
    comments[req.params.commentId] = comment
    res.status(201).send(post)
  },
  removeComment(req, res) {
    let post = req.store.posts[req.params.postId]
    let comments = post.comments
    comments.splice(req.params.commentId,1)
    res.status(200).send(post)
    
  }  
}