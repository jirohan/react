import React from 'react'

const Audio = ({songName, singerName, year, label, solo, id}) => {
    return (
      <>
          <img
        src={`https://picsum.photos/id/${id}/160/90`}
      />
      <div>
        <div className='songName'>SongName: {songName}</div>
        <div className='singerName'>SingerName: {singerName}</div>
        <div className='year'>Year: {year}</div>
        <div className='label'>Label: {label}</div>
        <div className='solo'>Solo: {solo ? '✔️' : '❌'}</div>
      </div>
      </>
    )
  }

export default Audio