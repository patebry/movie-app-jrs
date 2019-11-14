import React, { useState } from 'react'

const matchPassword = 'password'
const matchEmail = 'patebry@gmail.com'

function Login({ setPath }) {
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const [email, password] = e.target
        if (email.value === matchEmail && password.value === matchPassword) {
          setPath('movies')
        } else {
          console.log('bad credientials')
        }
      }}
    >
      <input
        type='email'
        // value={email}
        // onChange={e => {
        //   setEmail(e.target.value)
        // }}
      />
      <input
        type='password'
        // value={password}
        // onChange={e => {
        //   setPassword(e.target.value)
        // }}
      />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
