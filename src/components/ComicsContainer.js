import Comic from "./Comic"

function ComicsContainer({comics, removeComic}) {

  return (
    <>
      {comics.map(comic => <Comic key={comic.id} comic={comic} removeComic={removeComic} /> )}
    </>
  )

}

export default ComicsContainer
