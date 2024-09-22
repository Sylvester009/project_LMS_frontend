'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home () {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
    .then(response => setMessage(response.data.message))
    .catch(error => console.error('Error, data could not be reached', error));
  }, []);

  return(
    <div>
      <h1>{message}</h1>
    </div>
  );
}
