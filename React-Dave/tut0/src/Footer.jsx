import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>Copyrigth &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer