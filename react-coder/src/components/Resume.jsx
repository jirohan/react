import React from 'react'

const Resume = ({firstName, lastName, age, education, experience, skills}) => {
  return (
    <>
        <div>Resume</div>
        <div>
            <div className='firstName'>First Name: {firstName}</div>
            <div className='lastName'>Last Name: {lastName}</div>
            <div className='age'>Age: {age}</div>
            <div className='education'>Education:{education}</div>
            <div className='experience'>Experience: {experience}</div>
            <div className='skills'>Skills: {skills}</div>
        </div>
    </>    
  )
}

export default Resume