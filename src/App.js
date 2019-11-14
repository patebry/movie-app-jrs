import React, { useState } from 'react'
import Header from './components/header'
import Movies from './pages/movies'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Movies />
    </div>
  )
}

export default App
