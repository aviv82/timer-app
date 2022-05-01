// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Header } from "./components/header/Header";
import { Button } from "./components/button/Button";
import { Clock } from "./components/clock/Clock";

function App() {
  const [timer, setTime] = useState(10);

  return (
    <div className="App">
      <Header />
      <Button handle="focusHandle" name="focus" color="blue" />
      <Button handle="focusHandle" name="short break" color="blue" />
      <Button handle="focusHandle" name="long break" color="blue" />
      <Clock sec={timer} />
      <Button handle="focusHandle" name="start" color="green" />
      <Button handle="focusHandle" name="stop" color="red" />
      <Button handle="focusHandle" name="reset" color="grey" />
    </div>
  );
}

export default App;
