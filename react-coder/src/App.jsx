import React from 'react'
import Video from './components/Video'
import Audio from './components/Audio'

const App = () => {
  return (
    <div>
      <div>Hello World</div>
      <Video title="React Js tutorial"></Video>
      <Video title="Node Js tutorial"></Video>
      <Audio title="Tailwind" name="CSS"></Audio>
    </div>
  )
}

export default App