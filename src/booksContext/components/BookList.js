import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book, index) => {
        return <BookShow key={index} book={book} />;
    });

    return (<div className='book-list'> {renderedBooks} </div>)
}


export default BookList;