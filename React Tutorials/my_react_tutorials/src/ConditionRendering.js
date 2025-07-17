import React from "react";

function MissedGoal() {
    return <h1>Missed!</h1>
}

function MadeGoal() {
    return <h1>Goal!</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;

  return (
    <div>
    {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </div>
  );
}

export default Goal ;