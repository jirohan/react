// css modules style
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
//     const age = 1;
//     const isGreen = true;
    
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
// import "./App.module.css";
// import {Planets} from "./Planets";
// function App2(){
//     const planets = [
//         {name: "Mars", isGasPlanet: false},
//         {name: "Earth", isGasPlanet: false},
//         {name: "Jupiter", isGasPlanet: true},
//         {name: "Venus", isGasPlanet: false},
//         {name: "Neptune", isGasPlanet: true},
//         {name: "Uranus", isGasPlanet: true},
//     ];

//     return (
//     <div className="App2">
//         {planets.map(
//             (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
//         )}
//     </div>)
// }

// export default App2;

//Exercise 2
// import "./App.module.css";

// function App2(){
//     const footballers = [
//         {name: "Ronaldo", isPlayer: true},
//         {name: "Ram", isPlayer: false},
//         {name: "Messi", isPlayer: true},
//         {name: "Haaland", isPlayer: true},
//         {name: "Hari", isPlayer: false},
//         {name: "Neymar", isPlayer: true},
//     ];

//     return (
//         <div className="App2">
//             {footballers.map((footballer, key) =>
//                  footballer.isPlayer && <h1>{footballer.name}</h1>
//             )}
//         </div>
//     )
// }

// export default App2;

import "./App.module.css";
import {Cricketer} from './Cricketer';

function App2(){
    const cricketers = [
        {name: "Ronaldo", isPlayer: false},
        {name: "Sandip", isPlayer: true},
        {name: "Messi", isPlayer: false},
        {name: "Haaland", isPlayer: false},
        {name: "Gynandra", isPlayer: true},
        {name: "Neymar", isPlayer: false},
        {name: "Rohit", isPlayer: true}
    ];

    return (
        <div className="App2">
            {cricketers.map((cricket, key) =>
                 !cricket.isPlayer && <h1>{cricket.name}</h1>
            )}
        </div>
    )
}

export default App2;