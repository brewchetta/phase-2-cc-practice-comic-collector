import Comic from "./Comic"

function ComicsContainer({comics}) {

  return (
    <>
      {comics.map(comic => <Comic key={comic.id} comic={comic} /> )}
    </>
  )

}

export default ComicsContainer
