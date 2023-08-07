import React from "react";
import Video from "./components/Video";
import Audio from "./components/Audio";
import Resume from "./components/Resume";
import Fifa from "./components/Fifa";

const App = () => {
  let record2022 = {
    year: "2022", 
    host: "Qatar", 
    winner: "Argentina", 
    runnerup: "France", 
    goldenboot:"Mbappe", 
    goldenball:"Messi"
  }
  let record2018 = {
    year: "2018", 
    host: "Russia", 
    winner: "France", 
    runnerup: "Crotia", 
    goldenboot:"H.Kane", 
    goldenball:"Modric"
  }
  let record2014 = {
    year: "2014", 
    host: "Brazil", 
    winner: "Germany", 
    runnerup: "Argentina", 
    goldenboot:"J.Rodriguez", 
    goldenball:"Messi"
  }
  let record2010 = {
    year: "2010", 
    host: "South Africa", 
    winner: "Spain", 
    runnerup: "Netherland", 
    goldenboot:"T.Muller", 
    goldenball:"D.Forlan"
  }
  // let resum= {
  //   firstName:"Ram", 
  //   lastName:"Lal", 
  //   age: "20", 
  //   education:"Bachelors", 
  //   experience:"2 years", 
  //   skills: "Node, React, Js"
  // }
  // let resum2= {
  //   firstName:"Shyam", 
  //   lastName:"Lal", 
  //   age: "24", 
  //   education:"Masters", 
  //   experience:"4 years", 
  //   skills: "Node, React, Js, Python, Ruby, Php"
  // }
  // let obj = {
  //   title: "React Js tutorial",
  //   channel:"Rohan Codes",
  //   views:"100k",
  //   time:"5 months ago",
  // }
  return (
    <div>
      <Fifa {...record2022}></Fifa><br />

      <Fifa {...record2018}></Fifa><br />

      <Fifa {...record2014}></Fifa><br />

      <Fifa {...record2010}></Fifa><br />
    </div> 
    


    // <div>    <Resume
    //   {...resum}>

    //   </Resume><br />
    //   <Resume 
    //    {...resum2}></Resume>
    // </div>
  
    // <div>
    //   <div>Hello World</div>
    //   <Video
    //     {...obj}
    //   ></Video>
    //   <Video
    //     title="Node Js tutorial"
    //     views="100k"
    //     time="5 months ago"
    //   ></Video>
    // </div>
  );
};

export default App;
