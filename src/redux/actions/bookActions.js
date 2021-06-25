import * as types from "./actionTypes";

export function createBook(book) {
  return { type: types.ADD_BOOK, book };
}
