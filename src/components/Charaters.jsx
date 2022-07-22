import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Charaters = ({resident}) => {
    const [charater, setCharater] = useState({});
    useEffect (() => {
        axios.get(resident)
        .then(res => setCharater(res.data))   
    }, []);
    console.log(charater)
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Charaters;