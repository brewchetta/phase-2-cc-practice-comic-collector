function Comic() {

  return (
    <div className="comic-item">

      {/* The image should render if the details aren't displayed */}
      <img src={"#"} alt={"Comic Issue Image"} />

      {/* The details should render if the image isn't displayed */}
      <h3>{"Title"}</h3>
      <h4>{"Issue No."}</h4>
      <button>Remove</button>

    </div>
  )

}

export default Comic
