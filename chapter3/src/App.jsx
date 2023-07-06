import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

// function App() {
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   }

//   // fetch("https://catfact.ninja/fact")
//   // .then((res) => res.json())
//   // .then((data) => {
//   //   console.log(data)
//   // });

//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}>Generate Cat Fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }

// export default App;

function App(){
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
  });
  }

  useEffect(() => {
    fetchCatFact();
}, []);

  return(
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact} </p>
    </div>
  )
}

export default App;