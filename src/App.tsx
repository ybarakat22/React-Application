import React from "react";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
    </div>
  );
}

export default App;
