import { useEffect, useState } from 'react';
import { useTimeProvider } from '../Context/TimeProvider';

const Name = () => {
    const { time } = useTimeProvider();

    const [greeting, setGreeting] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (
            time.slice(0, -6) <= 11 &&
            (time.slice(-2) === 'AM' || time.slice(-2) === 'am')
        ) {
            setGreeting('Good Morning');
        } else if (
            time.slice(0, -6) < 6 &&
            (time.slice(-2) === 'PM' || time.slice(-2) === 'pm')
        ) {
            setGreeting('Good Afternoon');
        } else if (
            time.slice(0, -6) <= 11 &&
            (time.slice(-2) === 'PM' || time.slice(-2) === 'pm')
        ) {
            setGreeting('Good Evening');
        }

        setUsername(JSON.parse(localStorage.getItem('username')));
    }, [time]);

    return (
        <div className="namegreeting">
            <h1>
                {greeting} ! {username}
            </h1>
        </div>
    );
};

export default Name;
