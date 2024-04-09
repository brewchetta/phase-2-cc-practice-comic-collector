import { useState } from 'react'

function Comic({ comic, comics, setComics }) {

  const [flipped, setFlipped] = useState( true )

  function flipComic() {
    setFlipped(!flipped)
  }

  function handleObliterateComic(event) {
    event.stopPropagation()

    
    // remove from backend
    fetch(`http://localhost:8004/comics/${comic.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      // remove from front end
      const filteredComics = comics.filter(c => c.id !== comic.id)
      setComics(filteredComics)
    })
  }

  return (
    <div className="comic-item" onClick={flipComic}>

      { 
        // condition
        flipped
        ? 
        // true value
        <img src={comic.image_url} alt={comic.title} />
        : 
        // false value
        <>
          <h3>{comic.title}</h3>
          <h4>{comic.issue}</h4>
          <button onClick={ handleObliterateComic }>Remove</button>
        </>
      }

    </div>
  )

}

export default Comic
