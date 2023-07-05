import './App.css';

// function App() {
  // const name = <h1>Rohan</h1>;
  // const age = <h2>23</h2>;
  // const email = <h2>rohanmaharjan@gmail.com</h2>;
  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );

  // return (
  //   <div className="App">
//       {/* {user}
//       {user}
//       {user} */}
//       {/* <User />
//       <User />
//       <User />
//     </div>
//   );
// } */}

// component example
// const GetName = () => {
//   return "Pedro"
// };

//without props
// const User = () => {
//   return(
//     <div>
//       <h1>Ram</h1>
//       <h1>51</h1>
//       <h1>ram@maha@gmail.com</h1>
//     </div>
//   )
// }

// const GetNameComponent = () => {
//   return <h1>"Pedro"</h1>;
// };

//component use
// function App(){
//   return(
//     <div className='App'>
//       <User name="Rohan" age="23" email="rohan@rohan.com" />
//       <User name="Ram" age="43" email="ram@rohan.com" />
//       <User name="Han" age="33" email="han@rohan.com" />
//     </div>
//   );
// }


// const User = (props) => {
//   return(
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }



//Exercise 1
// function App(){
//   return(
//     <div className="App">
//       <Student name="Rohan" class="18" roll="29" section="A" />
//       <Student name="Ram" class="18" roll="20" section="A" />
//       <Student name="Hari" class="18" roll="9" section="A" />
//     </div>
//   );
// }

// const Student =(props) => {
//   return(
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.class}</h1>
//       <h1>{props.roll}</h1>
//       <h1>{props.section}</h1>
//     </div>
//   )
// }

//Exercise 2
// function App(){
//   return(
//     <div className="App">
//       <Job name="Rohan" salary="90000" position="Senior SDE" company="Amazon" />
//       <Job name="Ram" salary="40000" position="Junior SDE" company="Google" />
//       <Job name="Hari" salary="190000" position="Project Manager" company="Alibaba" />
//     </div>
//   )
// }

// const Job = (props) => {
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.salary}</h2>
//       <h2>{props.position}</h2>
//       <h2>{props.company}</h2>
//     </div>
//   )
// }

// Exercise 3
function App(){
  return(
    <div className="App">
      <Teacher name="Ram" id="001" salary="50000" post="DI"/>
      <Teacher name="Shyam" id="021" salary="90000" post="Principal"/>
      <Teacher name="Gita" id="011" salary="80000" post="Incharge"/>
    </div>
  )
}

const Teacher = (props)=>{
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.id}</h2>
      <h2>{props.salary}</h2>
      <h2>{props.post}</h2>
    </div>
  )
}

export default App;
