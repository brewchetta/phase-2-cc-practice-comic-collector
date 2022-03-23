function ComicForm() {
  return (

    <form className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image">Image URL: </label>
      <input name="image" />

      <label htmlFor="title">Title: </label>
      <input name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" />

      <label htmlFor="description">Description: </label>
      <input name="description" />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
