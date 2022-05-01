import { useEffect, useState } from 'react';

const Focus = () => {
    const [focusAvailable, setFocusAvailable] = useState(false);
    const [focus, setFocus] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [focusDate, setFocusDate] = useState(null);

    const handleAddFocus = (event) => {
        if (event.key === 'Enter') {
            const date = new Date();
            localStorage.setItem(
                'focus',
                JSON.stringify({
                    focusHeading: event.target.value,
                    focusDate: date.getDate(),
                }),
            );
            setFocusAvailable(true);
            setFocus(event.target.value);
            setIsEditable(false);
        }
    };

    const handleEditButton = () => setIsEditable(!isEditable);

    const AddEditFocus = () => {
        return (
            <div className="addFocus">
                <h1>What's your main focus for today ?</h1>
                <h1 className="inputFocus">
                    <input type="text" onKeyPress={handleAddFocus} />
                </h1>
            </div>
        );
    };

    const ShowFocus = () => {
        return (
            <div className="showFocus">
                <h1>My main focus today is {focus} </h1>
                <div>
                    <button onClick={handleEditButton}>Edit</button>
                </div>
            </div>
        );
    };

    const removeOldFocus = () => {
        if (focusDate) {
            const date = new Date();
            const sameDay = date.getDate() === focusDate;
            if (!sameDay) {
                localStorage.removeItem('focus');
                setFocus(null);
                setFocusDate(null);
                setFocusAvailable(false);
            }
        }
    };

    useEffect(() => {
        const pastFocus = JSON.parse(localStorage.getItem('focus'));
        pastFocus && setFocusAvailable(true);
        pastFocus && setFocus(pastFocus.focusHeading);
        pastFocus && setFocusDate(pastFocus.focusDate);
    }, []);

    useEffect(() => {
        removeOldFocus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focus, focusDate]);

    return (
        <div>
            {focusAvailable && isEditable === false ? (
                <ShowFocus />
            ) : (
                <AddEditFocus />
            )}
        </div>
    );
};

export default Focus;
