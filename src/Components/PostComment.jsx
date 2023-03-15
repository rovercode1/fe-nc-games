import { useState } from "react"
export default function PostComment(){
  const [postedComment, setPostedComment] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(postedComment)
    setPostedComment('')
  }

  return (
  <section id='post-comment'>
    <form action="" onSubmit={handleSubmit}>
      <input  onChange={(event) => setPostedComment(event.target.value)} value={postedComment}></input>
      <button type="submit">Submit</button>
    </form>
  </section>
  )
}