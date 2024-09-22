'use client'

import axios from "axios";
import { useState, useEffect } from "react";

const Member = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/member')
        .then(response => setMessage(response.data.message))
        .catch(error => console.error("Error displaying page", error))
    })

    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}
export default Member;