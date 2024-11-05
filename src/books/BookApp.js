import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import  {useState} from "react";

function BookApp() {
    const [books, setBooks] = useState([]);

    const createBook = (bookName) => {
        const newBook = [
            ...books,
            {id: books.length + 1, name: bookName}
        ]
        // console.log(newBook)
        setBooks(newBook);
    };

    const deleteBookById = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const editBookById = (id, newName) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, name: newName }
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