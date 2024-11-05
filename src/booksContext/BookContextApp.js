import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import {useEffect, useContext} from "react";


import BooksContext from './context/books'

function BookContextApp() {
    const { fetchBooks } = useContext((BooksContext));

    useEffect(() =>{ fetchBooks()},[] )

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}


export default BookContextApp;