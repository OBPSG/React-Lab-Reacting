import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (!loaded) {
                setLoaded(true);
            }
        }, 5000);
    }, [loaded]);

    if (loaded) {
        return (
            <div>
                <h1>Hello World, from React!</h1>
                <Greeter phrase="Hello again" name="World"></Greeter>
                <Greeter phrase="Nice to meet you" name="React"></Greeter>
                <Greeter phrase="It's a lovely day to learn web development" name="isn't it?"></Greeter>
                <input value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <p>You are logging in as {username}</p>
            </div>
        );
    }
    else {
        return (
            <>
                <h1>Loading...</h1>
                <button onClick={() => { setLoaded(true) }}>Hurry up!</button>
            </>
        );
    }

};

export default App
