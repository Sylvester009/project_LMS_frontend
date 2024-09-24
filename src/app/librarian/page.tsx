"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Library from "../Component/library";

interface Book {
  title: string;
  author: string;
  image: string
}

const Librarian = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => setBooks(response.data.books))
      .catch((error) => console.error("Error displaying page", error));
  }, []);

  return (
    <div>
      <h1>Librarian Page</h1>
      <Library param={books} />
    </div>
  );
};
export default Librarian;
