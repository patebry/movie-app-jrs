import React, { useState, Fragment } from 'react'

const matchPassword = 'password'
const matchEmail = 'patebry@gmail.com'

function Login({ setPath }) {
  const [showError, setShowError] = useState(false)
  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault()
          const [email, password] = e.target
          if (email.value === matchEmail && password.value === matchPassword) {
            setPath('movies')
          } else {
            setShowError(true)
            setTimeout(() => {
              setShowError(false)
            }, 5000)
          }
        }}
      >
        <input placeholder='email' />
        <br />
        <br />
        <input type='password' placeholder='password' />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
      {showError && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            backgroundColor: 'black',
            color: 'white',
            padding: '16px'
          }}
        >
          Bad Email and Password
        </div>
      )}
    </Fragment>
  )
}

export default Login
