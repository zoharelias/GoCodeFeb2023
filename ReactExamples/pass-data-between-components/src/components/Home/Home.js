import React from 'react';
import { useState } from 'react';
import { Greeting } from '../Greeting/Greeting';

export const Home = () => {
    let [showSecret, setShowSecret] = useState(0);
    return (
        <div>
            <Greeting name={'jake'} displaySecret={setShowSecret}/>
            {/* will show a message once state is true */}
            {showSecret ? <p>Secret: You just went Against the Flow</p> : <p></p>}
        </div>
    )
}