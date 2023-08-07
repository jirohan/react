import React from 'react'

const Video = ({title, channel="Rohan Codes", views, time}) => {
  let bg = 'dark';
  return (
    <>
      <div>
          <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      </div>
      <div className='title'>{title}</div>
      <div className='channel'>{channel}</div>
      <div className='views'>
        {views} views <span></span> {time}
      </div>
    </>
  )
}



export default Video