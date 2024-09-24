"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Library from "../Component/library";

interface Book {
  title: string;
  author: string;
  publish_year: number | string;
  isbn: null | string;
}

const Librarian = () => {
  const [message, setMessage] = useState<Book>({
    title: "",
    author: "",
    publish_year: "",
    isbn: "",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => setMessage(response.data.book))
      .catch((error) => console.error("Error displaying page", error));
  }, []);

  return (
    <div>
      <h1>Librarian Page</h1>
      <Library param={message} />
    </div>
  );
};
export default Librarian;
