import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, dispatch] = useReducer(
    bookReducer,
    JSON.parse(localStorage.getItem("books")) || []
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
