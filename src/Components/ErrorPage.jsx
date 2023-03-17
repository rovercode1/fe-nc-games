export default function ErrorPage(){
  const search = window.location.href.split('/')[3]
  return (
    <section id='error-page'>
      <h1>Oh no! '<strong>{search}</strong>' does not exist !</h1>
    </section>
  )
}