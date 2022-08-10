import React, { useCallback, useState } from "react";
import List from "../Components/List";

function UseCallbackHook() {
  const [number, setNumber] = useState(0);
  const [random, setRandom] = useState(1);

  const handleButtonClick = () => {
    setRandom(Math.random(0, 100));
  };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>
        <h3>Random Number: {random}</h3>
      </div>
      <br />
      <div>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default UseCallbackHook;