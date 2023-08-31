import React from "react";

function Message() {
  const name = "Youssr";
  if (name) {
    return <h1>Weclome {name}</h1>;
  }
  return <h1>Weclome user</h1>;
}
export default Message;
