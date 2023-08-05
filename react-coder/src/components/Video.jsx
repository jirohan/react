import React from 'react'

const Video = ({title}) => {
  let bg = 'dark';
  return (
    <div>
        <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
    <h2 className={bg} >{title} Components</h2>
    </div>
  )
}



export default Video