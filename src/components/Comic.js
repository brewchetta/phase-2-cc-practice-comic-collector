function Comic() {

  return (
    <div className="comic-item">
      <img src={"#"} alt={"Image"} />

      <h3>{"Title"}</h3>
      <h4>{"Issue No."}</h4>

      <button name="show description">Show Description</button>

      { true ? <p>{"Description"}</p> : null}
    </div>
  )

}

export default Comic
