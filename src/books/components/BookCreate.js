import {useState} from 'react';

function BookCreate({onCreate}) {
    const [bookName, setBookName] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(bookName);
        setBookName('')
    }

    const handleChange = (event) => {
        setBookName(event.target.value);
    }

    return (
        <div className='book-create'>
            <h3>Add a book</h3>

            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input className='input' type="text" value={bookName} onChange={handleChange}/>
                <button className='button' >Create!</button>
            </form>
        </div>
    )
}


export default BookCreate;