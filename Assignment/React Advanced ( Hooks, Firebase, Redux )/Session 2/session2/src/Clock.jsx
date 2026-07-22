import React from "react";
import useCurrentTime from "./useCurrentTime";

function Clock() {
  const time = useCurrentTime();

  return (
    <div className="container">
      <h1>Current Time</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;