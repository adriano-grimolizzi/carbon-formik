import React, { useState } from 'react';

const App = () => {

    const [date, setDate] = useState(new Date());

    setInterval(() => setDate(new Date()), 1000);



    return (
        <div>
            <p>It is {date.toLocaleTimeString()}.</p>
        </div>
    );
};

export default App;