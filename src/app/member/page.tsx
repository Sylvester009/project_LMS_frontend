"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Library from "../Component/library";

interface Book {
  title: string;
  author: string;
  image: string
}

const Member = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => setBooks(response.data.books))
      .catch((error) => console.error("Error displaying page", error));
  }, []);

  return (
    <div>
      <h1>Member Page</h1>
      <Library param={books} />
    </div>
  );
};
export default Member;
