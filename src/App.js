import { useReducer, useState, createContext, useEffect } from 'react';
import './App.css';
import Sheep from "./components/Sheep";
import Message from "./components/Message";
import { sheepReducer } from "./reducers/sheepReducer";

export const SheepContext = createContext()

function App() {
  const [state, dispatch] = useReducer(sheepReducer, {
    sheep: ["🐑"],
    message: "Choose your preferred number of sheep!"
  })

  return (
    <SheepContext.Provider value={state}>
      <div className="App">
        <header className="App-header">
          <Sheep />
          <Message />
          <div>
            <button onClick={() => dispatch({type: "subtract"})}>Less sheep!</button>
            <button onClick={() => dispatch({type: "add"})}>More sheep!</button>
          </div>
        </header>
      </div>
    </SheepContext.Provider>
  );
}

export default App;
