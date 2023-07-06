import Axios  from "axios";
import { useState, useEffect } from "react";


function App2(){
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data);
        });
    };

    return(
        <div className="App">
            <input 
            type="text" 
            placeholder="Ex. Ram..." 
            onChange={(event) => {
                setName(event.target.value);
            }}
            />
            <button onClick={fetchData}>Predicted Age</button>

            <h1>Name: {predictedAge?.name}</h1> 
            {/* use of ? is try to access predicted age if it is not null */}
            <h1>Predicted Age: {predictedAge?.age}</h1>
            <h1>Count: {predictedAge?.count}</h1>
        </div>
    )
}

export default App2;