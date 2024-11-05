import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import  {useState} from "react";

function BookApp() {
    const [books, setBooks] = useState([]);

    const createBook = (bookTitle) => {
        const newBook = [
            ...books,
            {id: books.length + 1, title: bookTitle}
        ]
        setBooks(newBook);
    };

    const deleteBookById = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
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