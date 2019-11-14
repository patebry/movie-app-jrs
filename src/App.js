import React, { useState } from 'react'
import Header from './components/header'
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
  console.log(movies)
  return (
    <div className='App'>
      <Header />
      <div>{movies.length}</div>
      <form
        onSubmit={e => {
          e.preventDefault()
          e.persist()
          setMovies([...movies, newMovie])
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
              <div key={i} className='movieCard'>
                {x.title}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
