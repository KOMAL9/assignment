import React from "react";
import { AppContext } from './App';

export const Button = () => {
    const { name, setName } = React.useContext(AppContext);
    console.log(name);

    const handleClick = () => {
        setName('Chhaya!');
    }

    return (
        <div style={{
            margin: 5,
            padding: 5
        }}>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}