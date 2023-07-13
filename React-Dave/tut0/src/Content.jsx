import React from 'react'
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
   <main>
        {items.length ? (
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{marginTop: '2rem'}}>Your List is empty</p>
        )}
   </main>
  )
}

export default Content

    //const [name, setName] = useState("Ram");
    // const [count, setCount] = useState(0);

    // const handleNameChange = () => {
    //     const names = ['rohan', 'bob', 'kelvin'];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int]);
    // }

    // const handleClick = () => {
    //     setCount(count + 1)
    //     setCount(count + 1)
    //     console.log(count)
    // }

    // const handleClick2 = () => {
    //     console.log(count)
    // }

    {/* <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click count</button>
        <button onClick={handleClick2}>Click this</button> */}