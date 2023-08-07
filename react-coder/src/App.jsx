import React from "react";
import Video from "./components/Video";
import Audio from "./components/Audio";
import Resume from "./components/Resume";

const App = () => {
  let resum= {
    firstName:"Ram", 
    lastName:"Lal", 
    age: "20", 
    education:"Bachelors", 
    experience:"2 years", 
    skills: "Node, React, Js"
  }
  let resum2= {
    firstName:"Shyam", 
    lastName:"Lal", 
    age: "24", 
    education:"Masters", 
    experience:"4 years", 
    skills: "Node, React, Js, Python, Ruby, Php"
  }
  // let obj = {
  //   title: "React Js tutorial",
  //   channel:"Rohan Codes",
  //   views:"100k",
  //   time:"5 months ago",
  // }
  return (
    <div>    <Resume
      {...resum}>

      </Resume><br />
      <Resume 
       {...resum2}></Resume>
    </div>
  
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
