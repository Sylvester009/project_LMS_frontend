"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Library from "./Component/library";

interface Book {
  title: string;
  author: string;
  publish_year: number | string;
  isbn: null | string;
}

export default function Home() {
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
      .catch((error) =>
        console.error("Error, data could not be reached", error)
      );
  }, []);

  return (
    <div>
      <h1>Visitor Page</h1>
      <Library param={message} />
    </div>
  );
}
