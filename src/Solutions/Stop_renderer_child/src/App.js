import React from "react";
import "./App.css";
import { Greeting } from "./Greeting";

function App() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
  }, []);

  console.log("App Component.....");

  return (
    <div className="App">
      <Greeting name="Anuj" />
    </div>
  );
}

export default App;