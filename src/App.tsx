import React from 'react';
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["China", "Us", "Japan", "Egypt", "France"];
  const handleSelectItem = (item:string)=>{
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading='Countries' onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;