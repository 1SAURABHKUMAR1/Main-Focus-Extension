import { createContext, useContext, useEffect, useState } from 'react';

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        // for starting
        let DateTime = new Date().toLocaleTimeString();
        const Time = `${DateTime.slice(0, -6)} ${DateTime.slice(-2)}`;
        setTime(Time);

        // every 10 second
        setInterval(() => {
            let DateTime = new Date().toLocaleTimeString();
            const Time = `${DateTime.slice(0, -6)} ${DateTime.slice(-2)}`;
            setTime(Time);
        }, 10000);
    }, []);

    return (
        <TimeContext.Provider value={{ time }}>{children}</TimeContext.Provider>
    );
};

const useTimeProvider = () => useContext(TimeContext);

export { TimeProvider, useTimeProvider };
