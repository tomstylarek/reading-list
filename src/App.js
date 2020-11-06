import React from "react";
import "./style.css";

import BookContextProvider from "../contexts/BookContext";
import Navbar from "../components/Navbar";
import BookList from "../components/BookList";
import BookForm from '../components/BookForm'

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}
