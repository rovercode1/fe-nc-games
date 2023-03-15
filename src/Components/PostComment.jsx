import { useState } from "react"
export default function PostComment(){
  const [postedComment, setPostedComment] = useState('')
  return (
  <section id='post-comment'>
    <input type='text' ></input>
  </section>
  )
}