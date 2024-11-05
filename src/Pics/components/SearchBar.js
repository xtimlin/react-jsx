import {useState} from 'react';
import './SearchBar.css'

function SearchBar({onSubmit}) {
    const [searchValue, setSearchValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchValue)
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={searchValue} onChange={handleChange} />
            </form>
        </div>
    )
}


export default SearchBar;