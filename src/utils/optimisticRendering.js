import axios from "axios"

export const postingComment = (postInput, postButton)=>{
  postInput.disabled = true
  postButton.disabled = true
  postButton.innerText = 'Posting...'
  postButton.id = 'posting'
}

export const successfulPostedComment = (postInput, postButton, setPostedComment)=>{
    postInput.disabled = false
    postButton.innerText = 'Posted!'
    postButton.id = 'posted'
    setPostedComment('')

  setTimeout(() => {
    postButton.innerText = 'Submit'
    postButton.disabled = false
    postButton.id = ''
  }, 3000);
}

export const unsuccessfulPostedComment = (postInput, postButton, setPostedComment)=>{
  postInput.disabled = false
  postButton.innerText = 'Error!'
  postButton.id = 'error'
  setPostedComment('')

setTimeout(() => {
  postButton.innerText = 'Submit'
  postButton.disabled = false
  postButton.id = ''
}, 3000);
}

export const successfulDeletedComment = (e, setComments)=>{
  const clickedComment = e.target
  setComments((prevComments)=>{
    const updatedComments = prevComments.filter((comment)=>{
      return comment.comment_id !== +clickedComment.id  
    })
    return [...updatedComments]
  })
}

export const successfulVotedReview = (button)=>{
  console.log(button)
  let currentVotes = button.innerText.split(' ')[0]
  const isPressed =  button.className === 'button' 
  isPressed ? button.className='button pressed' : button.className='button'
  isPressed ? button.innerText = `${+currentVotes + 1 } Votes`: button.innerText = `${+currentVotes - 1 } Votes`
}

export const fetchDog = ()=>{
  return axios.get(('https://dog.ceo/api/breeds/image/random')).then(({data})=>{
    return data.message
  })
}