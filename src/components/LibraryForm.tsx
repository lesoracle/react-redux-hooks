import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/bookActions";

export interface IProps {}

interface IBook {
  title: string;
  rating: number;
}

const LibraryForm = (props: IProps) => {
  const [book, setBooks] = useState<IBook>({ title: "", rating: 0 });
  // const [bookList, setBookList] = useState<IBook[]>([]);

  const books = useSelector((state: any) => state.books);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBook: any = {
      ...book,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setBooks(newBook);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  setBookList([...bookList, book]);
    dispatch(actions.createBook(book));
  };

  return (
    <>
      <h1>Enter a book to add to redux store</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group m-2">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={book.title}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="rating">Rating :</label>
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={handleChange}
            value={book.rating}
          />
        </div>
        <button className="btn btn-primary m-3">Add book</button>
        {/* {bookList && bookList.length}
        {bookList &&
          bookList.map((b) => {
            return <div key={b.title}>{b.title}</div>;
          })} */}

        <br />
        <h3>From selector</h3>
        {books && books.length}
        {books &&
          books.map((book: IBook) => {
            return <div key={book.title}>{book.title}</div>;
          })}
      </form>
    </>
  );
};

export default LibraryForm;
