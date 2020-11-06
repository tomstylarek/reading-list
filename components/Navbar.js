import React, { useContext } from "react";

import { BookContext } from "../contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext); // get array of books from context

  return (
    <nav className="Navbar">
      <h1>Reading List</h1>
      <p>You have {books.length} books to get through...</p>
    </nav>
  );
}

export default Navbar;
