import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [birthdate, setBirthdate] = useState(0);
  const [luckyNumber, setLuckyNumber] = useState(null);
  const [lucky, setLucky] = useState(null);

  const handleChangeBirthdate = (e) => {
    setBirthdate(e.target.value);
  };

  const handleChangeLucky = (e) => {
    setLuckyNumber(e.target.value);
  };

  const findLucky = () => {
    var newStr = birthdate.replace(/-/g, "");

    var digits = parseInt(newStr);
    const arrayOfDigits = Array.from(String(digits), Number);
    let sum = 0;
    for (let i = 0; i < arrayOfDigits.length; i++) {
      sum = sum + arrayOfDigits[i];
      if (sum % luckyNumber == 0) {
        setLucky("Horeey ! You are lucky man!");
      } else {
        setLucky("You are unlucky man!");
      }
    }
  };
  return (
    <div className="App">
      <h1>Find your birthdate is lucky or not ?</h1>
      <hr />
      <label>Enter Your Bithdate: </label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        onChange={handleChangeBirthdate}
        value={birthdate}
      ></input>
      <label>Enter your lucky number:</label>
      <input
        type="number"
        id="luckyNumber"
        name="luckyNumber"
        placeholder="Enter here.."
        onChange={handleChangeLucky}
        value={luckyNumber}
      ></input>

      <button id="calculate-btn" onClick={findLucky}>
        Check
      </button>
      <h2>{lucky}</h2>
    </div>
  );
}
