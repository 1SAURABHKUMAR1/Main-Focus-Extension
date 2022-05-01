import { useEffect, useState } from 'react';
import './App.css';

import imageArray from './Data/Wallpaper';
import OldUser from './Pages/OldUser';
import NewUser from './Pages/NewUser';

const App = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(null);
    const [imageAddress, SetImageAddress] = useState(null);

    useEffect(() => {
        SetIsLoggedIn(localStorage.getItem('username'));

        SetImageAddress(
            imageArray[Math.floor(Math.random() * imageArray.length)],
        );
    }, []);

    return (
        <div
            className="app"
            style={{
                backgroundImage: `url(${imageAddress})`,

                backgroundSize: 'cover',
            }}
        >
            {isLoggedIn ? <OldUser /> : <NewUser />}
        </div>
    );
};

export default App;
