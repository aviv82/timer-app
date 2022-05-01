// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Header } from "./components/header/Header";
import { Button } from "./components/button/Button";
import { Clock } from "./components/clock/Clock";
import { Time } from "./data";

function App() {
  const [timer, setTime] = useState(Time);

  const handleFocusClick = () => {
    return setTime(30 * 60);
  };
  const handleShortClick = () => {
    return setTime(10 * 60);
  };
  const handleLongClick = () => {
    return setTime(20 * 60);
  };

  const countDown = () => {
    setInterval(setTime, 1000, (x) => x - 1);
  };

  return (
    <div className="App">
      <Header />
      <Button handle={handleFocusClick} name="focus" color="blue" />
      <Button handle={handleShortClick} name="short break" color="blue" />
      <Button handle={handleLongClick} name="long break" color="blue" />
      <Clock sec={timer} />
      <Button handle={countDown} name="start" color="green" />
      <Button handle="focusHandle" name="stop" color="red" />
      <Button handle="focusHandle" name="reset" color="grey" />
    </div>
  );
}

export default App;
