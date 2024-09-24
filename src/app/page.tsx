"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Library from "./Component/library";
import './globals.css';

interface Book {
  title: string;
  author: string;
  image: string
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => setBooks(response.data.books))
      .catch((error) =>
        console.error("Error, data could not be reached", error)
      );
  }, []);

  return (
    <div>
      <h1>Visitor Page</h1>
      <Library param={books} />
    </div>
  );
}
