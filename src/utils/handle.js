import { deleteComment } from "../api"
export const optimisticPostedComment= (postInput, postButton, setPostedComment)=>{
  postInput.disabled = true
  postButton.disabled = true
  postButton.innerText = 'Posting...'
  postButton.id = 'posting'

  setTimeout(() => {
    postInput.disabled = false
    postButton.innerText = 'Posted!'
    postButton.id = 'posted'
    setPostedComment('')
  }, 3000);

  setTimeout(() => {
    postButton.innerText = 'Submit'
    postButton.disabled = false
    postButton.id = ''
  }, 5000);
}

export const optimisticDeletedComment = (e, setComments)=>{
  const clickedComment = e.target.parentNode.parentNode
  setComments((prevComments)=>{
    const updatedComments = prevComments.filter((comment)=>{
      return comment.comment_id !== +clickedComment.id  
    })
    return [...updatedComments]
  })
  deleteComment(+clickedComment.id)
}