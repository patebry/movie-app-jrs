import React, { useState } from 'react'
import Header from './components/header'
import defaultMovies from './defaultMovies.json'
import './App.css'

function App() {
  const [movies, setMovies] = useState(defaultMovies)
  const [newMovie, setNewMovie] = useState({
    title: '',
    id: Math.random(),
    rank: null
  })
  console.log(movies)
  return (
    <div className='App'>
      <Header />
      <div>{movies.length}</div>
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
