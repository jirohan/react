//States

import "./App.module.css";
import { useState } from 'react';

function App3(){
    const [age, setAge] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [showHide, setShowHide] = useState(true);
    const [textColor, setTextColor] = useState("black");

    const [count, setCount] = useState(0);

    const increaseAge = () => {
        setAge(age + 1);
    };

    const decreaseAge = () => {
        setAge(age - 1);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const increase= () => {
        setCount(count + 1);
    }

    const decrease= () => {
        setCount(count - 1);
    }

    const zero= () => {
        setCount(count === 0);
    }

    return <div className="App">

        <input type="text" onChange={handleInputChange}/>
        {inputValue}
        <br /><br />


        <button onClick={decreaseAge}>Decrease Age</button>
        {age} 
        <button onClick={increaseAge}>Increse Age</button><br /><br />        


        <button 
            onClick={() => {
                setShowHide(!showHide);
                setTextColor(textColor === "black" ? "red" : "black");

            }}>
            Show/Hide
        </button>        
        {showHide && <h1 style={{color: textColor}}>HI MY NAME IS ROHAN</h1>}


        <button onClick={decrease}>Decrease</button>
        {count}
        <button onClick={increase}>Increase</button><br />
        <button onClick={zero}>Set Zero</button>
        </div>;

        
}

export default App3;