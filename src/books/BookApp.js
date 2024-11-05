import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import  {useState, useEffect} from "react";
import axios from "axios";
import * as response from "../AppComponent/data";

function BookApp() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response =  await axios.get("http://localhost:3001/books")
        setBooks(response.data);
    };

    useEffect(() =>{fetchBooks()},[])

    const createBook = async (bookTitle) => {
        // const newBook = [
        //     ...books,
        //     {id: books.length + 1, title: bookTitle}
        // ]
        // setBooks(newBook);

        const response = await axios.post("http://localhost:3001/books", {
            title: bookTitle,
        })
        setBooks([...books, response.data]);
    };

    const deleteBookById = async (id) => {
        const response = await axios.delete(
            `http://localhost:3001/books/${id}`
        );

        setBooks(books.filter((book) => book.id !== id));
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(
            `http://localhost:3001/books/${id}`,
            {title: newTitle}
        );

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }

            return book;
        });

        setBooks(updatedBooks);
    }


    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook}/>
        </div>
    )
}


export default BookApp;