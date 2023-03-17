import axios from "axios"
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

export const reviewDoesntExist = ()=>{

}

export const fetchDog = ()=>{
  return axios.get(('https://dog.ceo/api/breeds/image/random'))
  .then(({data})=>{
    return data.message
  })
}