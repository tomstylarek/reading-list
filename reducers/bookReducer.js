import { v1 as uuid } from "uuid"; // generate a random id

export function bookReducer(state, action) {
  switch (action.type) {
    case 'books/addBook':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid()
        }
      ];
    case 'books/removeBook':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}