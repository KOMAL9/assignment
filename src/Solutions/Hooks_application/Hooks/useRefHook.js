import React, { useState, useEffect, useRef } from "react";

export default function UseRefHook() {
  const [inputName, setInputName] = useState("");
  const prevName = useRef("");

  //   const renderCount = useRef(0);

  //   useEffect(() => {
  //     renderCount.current = renderCount.current + 1;
  //   });

  //   const focus = () => {
  //     inputRef.current.focus();
  //   };

  useEffect(() => {
    prevName.current = inputName;
  }, [inputName]);

  return (
    <>
      <input
        // ref={inputRef}
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <br />
      <h2>
        My Name is {inputName} and it used to be {prevName.current}
      </h2>

      {/* <button onClick={focus}>Focus</button> */}

      {/* <div>I rendered {renderCount.current} times</div> */}
    </>
  );
}