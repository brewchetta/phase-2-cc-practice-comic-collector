function Comic() {

  return (
    <div className="comic-item">

      {
        true

        ?

        <img src={"#"} alt={"Comic Issue Image"} />

        :

        <>
          <h3>{"Title"}</h3>
          <h4>{"Issue No."}</h4>
          <button>Remove</button>
        </>

      }



    </div>
  )

}

export default Comic
