function ComicForm() {
  return (

    <form>

      <h2>Add A New Issue</h2>

      <label htmlFor="image">Image URL: </label>
      <input name="image" value={""} />

      <label htmlFor="title">Title: </label>
      <input name="title" value={""} />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" value={""} />

      <label htmlFor="description">Description: </label>
      <input name="description" value={""} />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
