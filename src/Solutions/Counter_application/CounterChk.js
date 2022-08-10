import React from "react";

export const CounterChk = () => {
    const [timer, setTimer] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimer((prevState) => prevState + 100);
        }, 10);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <span>{Math.floor(timer / 60000) % 60}:</span>
            <span>{Math.floor(timer / 1000) % 60}:</span>
            <span>{Math.floor(timer / 10) % 1000}</span>
        </div>
    )
}