import React, { useState } from "react";

export default function Bill() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [result, setResult] = useState(null);

  const calculateSplit = () => {
    if (!bill || !people) {
      setResult("⚠️ Please enter bill and number of people.");
      return;
    }

    const billAmount = parseFloat(bill);
    const numPeople = parseInt(people);

    if (numPeople <= 0) {
      setResult("⚠️ Number of people must be at least 1.");
      return;
    }

    const tipAmount = tip ? (billAmount * parseFloat(tip)) / 100 : 0;
    const total = billAmount + tipAmount;
    const perPerson = total / numPeople;

    setResult(`Each person pays: ₦${perPerson.toFixed(2)}`);
  };

  return (
    <div className="container">
      <h2 className="heading">Expense Splitter 💸</h2>

      <input
        type="number"
        placeholder="Enter total bill"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        className="input"
      />

      <input
        type="number"
        placeholder="Enter number of people"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
        className="input"
      />

      <input
        type="number"
        placeholder="Enter tip % (optional)"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
        className="input"
      />

      <button onClick={calculateSplit} className="button">
        Split Expense
      </button>

      {result && <p className="result">{result}</p>}
    </div>
  );
}
