//css modules style
// import styles from './App.module.css';

// function App2(){
//     return(
//         <div className={styles.App2}>
//             <h1 className={styles.name}>Rohan</h1>
//         </div>
//     )
// }
// export default App2;


//conditional rendering
// import "./App.module.css";

// function App2(){
//     const age = 19;
//     const isGreen = false;
    
//     return (
//     <div className="App2"> 
//         {age >=18 ? <h1>Over Age </h1> : <h1> Under Age</h1>}
//         <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>

//         {isGreen && <button>THIS IS A BUTTON</button>}
//     </div>
//     );
// }

// export default App2;

//lists - action looping through array
// import "./App.module.css";
// import {User} from "./User"

// function App2(){
//     const users = [
//         {name: "Pedro", age:21},
//         {name: "Jake", age:25},
//         {name: "Jessica", age:45},
//     ];

//     return (
//     <div className="App2">
//         {users.map((user, key) => {
//             return (
//                 <User name={user.name} age={user.age} />
//             )
//         })}
//     </div>);
// }

// export default App2;

//Exercise 1
import "./App.module.css";
import {Planets} from "./Planets"
function App2(){
    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
    ];

    return (
    <div className="App2">
        {planets.map(
            (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
        )}
    </div>)
}

export default App2;