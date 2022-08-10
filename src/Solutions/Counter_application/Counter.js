import React from "react";

const formatValues = (timer) => {
    return {
        sec: Math.floor((timer / 1000) % 60),
        min: Math.floor((timer / 60000) % 60),
        msec: Math.floor((timer / 10) % 100)
    }
}

const formatTimer = (timer) => {
    const { min, sec, msec } = formatValues(timer);

    return (
        <div className="timer">
            <span>{min > 9 ? min : `0${min}`}:</span>
            <span>{sec > 9 ? sec : `0${sec}`}:</span>
            <span>{msec}</span>
        </div>
    )
}

export const Counter = () => {
    const [timer, setTimer] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const [laps, setLaps] = React.useState([]);

    React.useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevState) => prevState + 10);
            }, 10);
        }

        if (!isRunning) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isRunning]);

    const onReset = () => {
        setTimer(0);
    }

    const onStart = () => {
        setIsRunning(true);
    }

    const onLapClick = () => {
        const { min, sec, msec } = formatValues(timer);
        setLaps([...laps, { min, sec, msec }])
    }

    return (
        <div className="counter_container">
            {formatTimer(timer)}
            <div className="controls">
                <button onClick={onStart}>Start</button>
                <button onClick={onReset}>Reset</button>
                <button onClick={onLapClick}>Lap</button>
            </div>

            <div className="history">
                {laps.length > 0 && (
                    laps.map((lap, Idx) => (<p key={Idx}>{lap.min}:{lap.sec}:{lap.msec}</p>))
                )}
            </div>
        </div>
    )
}