import React, { useState } from 'react'
import Header from './components/header'
import Movie from './components/movie'
import Undo from './components/undo'
import defaultMovies from './defaultMovies.json'
import './App.css'

const defaultNewMovie = {
  title: '',
  id: Math.random(),
  rank: null
}

function App() {
  const [movies, setMovies] = useState(defaultMovies)
  const [newMovie, setNewMovie] = useState(defaultNewMovie)
  const [oldData, setOldData] = useState([])
  const [showUndo, setShowUndo] = useState(false)
  const undo = () => {
    setMovies(oldData)
  }
  return (
    <div className='App'>
      <Header />
      <div>{movies.length}</div>
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
        <button type='submit'>Submit</button>
      </form>
      <div className='movieWrapper'>
        {movies &&
          movies.length > 0 &&
          movies.map((x, i) => {
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
    </div>
  )
}

export default App
