import { useState } from 'react'
import Axios from "axios"

import './App.css'

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse);
    }
    );
  };

  return(
    <div>
    <h1>Generate An Excuse</h1>
    
    <button onClick={() => fetchExcuse("party")}>Party</button><br />
    <button onClick={() => fetchExcuse("family")}>Family</button><br />
    <button onClick={() => fetchExcuse("office")}>Office</button>
    <p>{generatedExcuse}</p>
    </div>
  )
  
}

export default App
