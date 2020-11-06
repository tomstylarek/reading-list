import React, { useContext } from "react";

import { BookContext } from "../contexts/BookContext";

function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "books/removeBook", id: book.id })}>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </li>
  );
}

export default BookDetails;
