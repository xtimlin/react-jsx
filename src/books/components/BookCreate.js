import {useState} from 'react';

function BookCreate({onCreate}) {
    const [bookTitle, setBookTitle] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(bookTitle);
        setBookTitle('')
    }

    const handleChange = (event) => {
        setBookTitle(event.target.value);
    }

    return (
        <div className='book-create'>
            <h3>Add a book</h3>

            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input className='input' type="text" value={bookTitle} onChange={handleChange}/>
                <button className='button' >Create!</button>
            </form>
        </div>
    )
}


export default BookCreate;