import { useState } from "react";
function IncrementDecrement() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    count > 0 ? setCount(count - 1) : setCount(0);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={increment}
        onClickCapture={() => alert("Hello! Member!")}
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <button onClick={() => alert("Welcome User")}>Welcome</button>
      <br />
      <br />
      <button onClick={() => alert("I am Clicked")}>Click Me</button>
    </div>
  );
}
export default IncrementDecrement;
