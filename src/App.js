import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Tom");

  return (
    <div className="App">
      <NameInput name={name} onNameChange={setName} />

      <Greeting name={name} />
    </div>
  );
}

function NameInput({ name, onNameChange }) {
  function onChange(event) {
    onNameChange(event.target.value);
  }

  return <input type="text" value={name} onChange={onChange} />;
}

function Greeting({ name }) {
  return <p>Hello, {name}</p>;
}

export default App;
