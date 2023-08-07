import React from 'react'

const Fifa = ({year, host, winner, runnerup, goldenboot, goldenball, penaltyShootout,id}) => {
  return (
    <>
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="" />
        <div>
            <div className='year'>Year: {year}</div>
            <div className='host'>Host: {host}</div>
            <div className='winner'>Winner: {winner}</div>
            <div className='runnerup'>Runnerup: {runnerup}</div>
            <div className='goldenboot'>Goldenboot: {goldenboot}</div>
            <div className='goldenball'>Goldenball: {goldenball}</div>
            <div className='penaltyShootout'>Penalty: {penaltyShootout ? '✔️' :  '❌'}</div>
            
            
            <div className=''></div>
        </div>

    </>
  )
}

export default Fifa