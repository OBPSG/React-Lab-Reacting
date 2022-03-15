import React from 'react';
import Greeter from './components/Greeter';

const App = () => {
    return (
        <div>
            <h1>Hello World, from React!</h1>
            <Greeter phrase="Hello again" name ="World"></Greeter>
            <Greeter phrase="Nice to meet you" name="React"></Greeter>
            <Greeter phrase="It's a lovely day to learn web development" name="isn't it?"></Greeter>
        </div>
    );
};

export default App
