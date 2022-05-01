import { useTimeProvider } from '../Context/TimeProvider';

const Clock = () => {
    const { time } = useTimeProvider();

    return (
        <div className="clock">
            <h1>{time}</h1>
        </div>
    );
};

export default Clock;
