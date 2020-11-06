import React, { useState, useContext } from "react";

import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'books/addBook', book: { title, author }})
    setTitle("");
    setAuthor("");
  }

  return (
    <form className="BookForm" onSubmit={handleSubmit}>
      <input
        className="title-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="author-input"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input className="btn" type="submit" value="add book" />
    </form>
  );
}

export default BookForm;
