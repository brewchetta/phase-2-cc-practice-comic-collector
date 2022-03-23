import { useState } from 'react'

const defaultState = {
  title: '',
  issue: "1",
  image_url: ""
}

function ComicForm({addComic}) {

  const [formState, setFormState] = useState(defaultState)

  function resetForm() {
    setFormState(defaultState)
  }

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:8004/comics')
    .then(res => res.json())
    .then(data => addComic(data))
  }

  const {title, image_url, issue} = formState

  return (

    <form className="comic-form" onSubmit={handleSubmit}>

      <h2>Add A New Issue</h2>

      <label htmlFor="image">Image URL: </label>
      <input name="image_url" value={image_url} onChange={handleChange} />

      <label htmlFor="title">Title: </label>
      <input name="title" value={title} onChange={handleChange} />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" value={issue} onChange={handleChange} />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
