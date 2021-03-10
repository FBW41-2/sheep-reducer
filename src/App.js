import { useReducer, useState } from 'react';
import './App.css';
import { sheepReducer } from "./reducers/sheepReducer";

function App() {
  const [state, dispatch] = useReducer(sheepReducer, {
    sheep: ["🐑"],
    message: "Choose your preferred number of sheep!"
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {state.sheep}
        </div>
        <p>
          {state.message}
        </p>
        <div>
          <button onClick={() => dispatch({type: "subtract"})}>Less sheep!</button>
          <button onClick={() => dispatch({type: "add"})}>More sheep!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
