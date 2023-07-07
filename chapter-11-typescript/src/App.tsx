import React from "react";
import "./App.css";
import { Person } from "./components/Person"; 


function App(){
  return(
      <div className="App">
          <Person 
              name="Ram"
              email="ped@gmail.com"
              age={23}
              isMarried={true}
              friends={["jessica", "jake", "jerry", "jasmine"]}
          />
      </div>
  );
}

export default App;