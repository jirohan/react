import React from 'react'

const Fifa = ({year, host, winner, runnerup, goldenboot, goldenball}) => {
  return (
    <>
        <div>Fifa World Cup Winners</div>
        <div>
            <div className='year'>Year: {year}</div>
            <div className='host'>Host: {host}</div>
            <div className='winner'>Winner: {winner}</div>
            <div className='runnerup'>Runnerup: {runnerup}</div>
            <div className='year'>Goldenboot: {goldenboot}</div>
            <div className='year'>Goldenball: {goldenball}</div>
        </div>

    </>
  )
}

export default Fifa