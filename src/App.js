import { useState } from "react";
import "./App.css";
import DailyForm from "./DailyForm";
import DaySelect from "./DaySelect";

function App() {
  const [name, setName] = useState("Tom");
  const [dailyPlan, setDailyPlan] = useState("Monday");

  return (
    <div className="App">
      <NameInput name={name} onNameChange={setName} />
      <Greeting name={name} />
      {/* EXERCISE-2 */}
      <DaySelect chooseDay={setDailyPlan} />
      <DailyForm myplan={dailyPlan} name={name} />
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
