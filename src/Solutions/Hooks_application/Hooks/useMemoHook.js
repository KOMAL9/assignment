import React, { useMemo, useState } from "react";

function slowFunction(num) {
  for (let index = 0; index <= 1000000000; index++) {}
  return num * 2;
}

function UseMemoHook() {

  const [number, setNumber] = useState(0);
  const [random, setRandom] = useState(1);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const handleButtonClick = () => {
    setRandom(Math.random(0, 100));
  }

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <div>
        Double Number: {doubleNumber}
      </div>
      <br />
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>
        <h3>Random Number: {random}</h3>
      </div>
    </>
  );
}

export default UseMemoHook;