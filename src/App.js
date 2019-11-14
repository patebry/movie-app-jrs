import React, { useState } from 'react'
import Header from './components/header'
import Movies from './pages/movies'
import Login from './pages/login'
import './App.css'

const whatToShow = (page, setPath) => {
  switch (page) {
    case 'login':
      return <Login setPath={setPath} />
    case 'movies':
      return <Movies />
    default:
      return <Login />
  }
}

function App() {
  const [path, setPath] = useState('login')

  return (
    <div className='App'>
      <Header />
      {whatToShow(path, setPath)}
    </div>
  )
}

export default App
