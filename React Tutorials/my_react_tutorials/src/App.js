import React from "react";
import Goal from "./ConditionRendering";
import Garage from "./ReactList";
import Myform from "./Forms";

function App() {
  return (   
    <div>
      <Goal isGoal = {true}/>
       <Garage />
       <Myform />
    </div>

  );
}

export default App;
