import { useEffect, useState } from 'react';
import quotes from '../Data/Quotes.json';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const randomQuotes =
            quotes.quotesArray[
                Math.floor(Math.random() * quotes.quotesArray.length)
            ];
        setQuote(randomQuotes.quote);
        setAuthor(randomQuotes.author);
    }, []);

    return (
        <div className="quoteauthor">
            <q>{quote}</q> ~ {author}
        </div>
    );
};

export default Quote;
