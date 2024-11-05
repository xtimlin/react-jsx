import {useState} from "react";

function BookEdit({book, onSubmit}) {
    const [name, setName] = useState(book.name);
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, name);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' value={name} onChange={handleChange}/>
            <button className='button is-primary'>
                Save
            </button>
        </form>

    )
}


export default BookEdit;