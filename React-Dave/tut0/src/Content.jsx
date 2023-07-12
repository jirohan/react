import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['rohan', 'bob', 'kelvin'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log("You clicked it")
    }
    const handleClick2 = (name) => {
        console.log(`${name} was Clicked`)
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

  return (
   <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => handleClick2('Dave')}>Click name</button>
        <button onClick={(e) => handleClick3(e)}>Click this</button>
   </main>
  )
}

export default Content