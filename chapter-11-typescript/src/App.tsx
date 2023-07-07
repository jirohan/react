import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person"; 


function App(){

  return(
      <div className="App">
          <Person 
              name="Ram"
              email="ped@gmail.com"
              age={23}
              isMarried={true}
              friends={["jessica", "jake", "jerry", "jasmine"]}
              country={Country.Nepal}
          />
      </div>
  );
}

export default App;