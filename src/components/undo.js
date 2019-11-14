import React from 'react'

function Undo({ onYes }) {
  return (
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
      Undo
      <button onClick={onYes} style={{ marginLeft: '16px' }}>
        yes
      </button>
    </div>
  )
}

export default Undo
