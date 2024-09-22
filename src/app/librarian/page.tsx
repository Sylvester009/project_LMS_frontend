'use client'

import axios from "axios";
import { useState, useEffect } from "react";

const Librarian = () => {
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/librarian')
        .then(response => setMessage(response.data.message))
        .catch(error => console.error('error in displaying page', error))
    })

    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Librarian;