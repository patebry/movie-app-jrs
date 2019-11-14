import React from 'react'

function Movie(props) {
  const { data, removeMovie } = props
  return (
    <div className='movieCard'>
      <p style={{ marginRight: '16px' }}>{data.title}</p>
      <p
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={e => {
          removeMovie(data.id)
        }}
      >
        x
      </p>
    </div>
  )
}

export default Movie
