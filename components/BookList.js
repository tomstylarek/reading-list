import React, { useContext } from "react";

import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);
  const bookElements = books.map(book => (
    <BookDetails book={book} key={book.id} />
  ));

  return books.length ? (
    <div className="BookList">
      <ul>{bookElements}</ul>
    </div>
  ) : (
    <div className="empty">No books to read</div>
  );
}

export default BookList;
