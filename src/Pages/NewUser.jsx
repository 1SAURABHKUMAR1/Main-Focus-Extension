import { useState } from 'react';

const NewUser = () => {
    const [name, setName] = useState('');

    const hangleName = (event) => {
        setName(event.target.value);
    };

    const setLocalStorageName = (event) => {
        if (event.key === 'Enter') {
            localStorage.setItem('username', JSON.stringify(name));
            window.location.reload(false);
        }
    };

    return (
        <>
            <div className="component">
                <h1>Hey !! Whats Your Name ?</h1>
                <h1>
                    <input
                        type="text"
                        value={name}
                        onChange={hangleName}
                        onKeyPress={setLocalStorageName}
                    />
                </h1>
            </div>
        </>
    );
};

export default NewUser;
