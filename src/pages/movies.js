import React, { Fragment, useState } from 'react'
import defaultMovies from '../defaultMovies.json'
import Undo from '../components/undo.js'
import Movie from '../components/movie.js'

const defaultNewMovie = {
  title: '',
  id: Math.random(),
  rank: null
}

function Movies() {
  const [movies, setMovies] = useState(defaultMovies)
  const [newMovie, setNewMovie] = useState(defaultNewMovie)
  const [oldData, setOldData] = useState([])
  const [showUndo, setShowUndo] = useState(false)
  const [search, setSearch] = useState('')
  const [image, setImage] = useState(null)

  const undo = () => {
    setMovies(oldData)
  }
  return (
    <Fragment>
      <Fragment>
        <h2>Add Movie</h2>
        <form
          onSubmit={e => {
            e.preventDefault()
            e.persist()
            setMovies([newMovie, ...movies])
            setNewMovie(defaultNewMovie)
          }}
        >
          <input
            type='text'
            name='title'
            value={newMovie.title}
            placeholder='title'
            onChange={e => {
              e.persist()
              setNewMovie({
                ...newMovie,
                title: e.target.value
              })
            }}
          />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </Fragment>
      <Fragment>
        <h2>Search Movies</h2>
        <form>
          <input
            value={search}
            placeholder='search movies'
            onChange={e => {
              setSearch(e.target.value)
            }}
          />
        </form>
      </Fragment>
      <br />
      <br />
      <input
        type='file'
        id='search-file'
        // accept='.txt'
        onChange={e => {
          const fileReader = new FileReader()
          fileReader.onload = e => {
            setImage(e.target.result)
            console.log(e.target.result)
          }
          fileReader.readAsDataURL(e.target.files[0])
        }}
      ></input>
      <br />
      <br />
      {image && (
        <img src={image} alt='text' style={{ width: '100%', height: '100%' }} />
      )}
      <div className='movieWrapper'>
        {movies &&
          movies.length > 0 &&
          movies
            // .filter(x => x.title.match(new RegExp(search, 'i')))
            .filter(
              x => x.title.toLowerCase().search(search.toLowerCase()) >= 0
            )
            .map((x, i) => {
              return (
                <Movie
                  data={x}
                  key={i}
                  removeMovie={id => {
                    setShowUndo(true)
                    setTimeout(() => {
                      setShowUndo(false)
                    }, 5000)
                    if (!showUndo) {
                      setOldData(movies)
                    }
                    setMovies(movies.filter(x => x.id !== id))
                  }}
                />
              )
            })}
      </div>
      {showUndo && (
        <Undo
          onYes={e => {
            setShowUndo(false)
            undo()
          }}
        />
      )}
    </Fragment>
  )
}

export default Movies
