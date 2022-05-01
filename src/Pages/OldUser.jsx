import Weather from '../Components/Weather';
import Clock from '../Components/Clock';
import NameGreeting from '../Components/NameGreeting';
import Focus from '../Components/Focus';
import Quote from '../Components/Quote';

const OldUser = () => {
    return (
        <>
            <div className="component">
                <Weather />
                <Clock />
                <NameGreeting />
                <Focus />
                <Quote />
            </div>
        </>
    );
};

export default OldUser;
