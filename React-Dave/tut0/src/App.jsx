import React from 'react'

const App = () => {
  const handleNameChange = () => {
    const names = ['rohan', 'bob', 'kelvin'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div>
      <p>
        Hello {handleNameChange()}!
      </p>
    </div>
  )
}

export default App