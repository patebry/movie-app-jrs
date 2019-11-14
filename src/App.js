import React, { useState } from 'react'
import Header from './components/header'
import defaultMovies from './defaultMovies.json'
import './App.css'

function App() {
  const [movies, setMovies] = useState(defaultMovies)
  console.log(movies)
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App
