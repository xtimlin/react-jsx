import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {
    const renderedBooks = books.map((book, index) => {
        return <BookShow key={index} book={book} onDelete={onDelete} onEdit={onEdit} />;
    });

    return (<div className='book-list'>{renderedBooks}</div>)
}


export default BookList;