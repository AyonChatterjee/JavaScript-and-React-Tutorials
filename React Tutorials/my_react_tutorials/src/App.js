import React from "react";
import Goal from "./ConditionRendering";
import Garage from "./ReactList";

function App() {
  return (   
    <div>
      <Goal isGoal = {true}/>
       <Garage />
    </div>

  );
}

export default App;
