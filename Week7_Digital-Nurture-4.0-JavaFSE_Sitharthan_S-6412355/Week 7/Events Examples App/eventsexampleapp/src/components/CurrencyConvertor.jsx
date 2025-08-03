import React from "react";
function CurrencyConvertor() {
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("");
  function handleConversion() {
    if (type.toUpperCase() === "USD") {
      alert(`Converted amount: ${amount * 80} Rupees`);
    } else if (type.toUpperCase() === "EUR") {
      alert(`Converted amount: ${amount * 100} Rupees`);
    } else if (type.toUpperCase() === "GBP") {
      alert(`Converted amount: ${amount * 115} Rupees`);
    } else {
      alert("Please enter a valid currency type (USD, EUR, GBP).");
    }
  }
  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleConversion}>
        <textarea
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></textarea>
        <br />
        <textarea
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
