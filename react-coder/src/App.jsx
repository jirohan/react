import React from 'react'

const App = () => {
  let name = 'react app'
  console.log('App')
  return (
    <div>
      {name}
      <Demo></Demo>
    </div>
  )
}

function Demo(){
  return(
    <div>
      Demo
    </div>
  )
}

export default App