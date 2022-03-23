import { useState } from 'react'

function Comic({comic, removeComic}) {

  const [renderImage, setRenderImage] = useState(true)

  function toggleRenderImage() {
    setRenderImage(prev => !prev)
  }

  function handleRemove() {
    removeComic(comic)
    fetch(`http://localhost:8004/comics/${comic.id}`, { method: 'DELETE' })
  }

  return (
    <div className="comic-item">

      {
        renderImage
        ?
        <img src={comic.image_url} alt={`Cover for ${comic.title}`} onClick={toggleRenderImage} />
        :
        <>
        <h3 onClick={toggleRenderImage}>{comic.title}</h3>
        <h4 onClick={toggleRenderImage}>{comic.issue}</h4>
        <button onClick={handleRemove}>Remove</button>
        </>
      }
    </div>
  )

}

export default Comic
