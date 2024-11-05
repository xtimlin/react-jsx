### JSX Note
https://jsx-notes.vercel.app/
https://state-updates.vercel.app/
https://react.dev/learn


```js
function App() {
    return (
        <h1>Hello App {new Date().toLocaleTimeString()}</h1>
    )

    // let message = 'Bye there!';
    // if (Math.random() > 0.5) {
    //     message = 'Hello there!';
    // }
    // return <h1>{message}</h1>;

    // return <h1>{new Date().toLocaleTimeString()}</h1>

    // const inputType = 'number';
    // const minValue = 5;
    // const maxValue = 100;
    // return <input type={inputType} min={minValue} max={maxValue}/>

    // return <textarea autoFocus/>

    // Rule #1: all property names follow camelCase
    // <input maxLength={5}/>

    // Rule #2: attributes meant to be numbers should be provided as numbers with curly braces
    // <input maxLength={5}/>

    // Rule #3:boolean true can be written with just the property name, false should be written with curly braces
    // <input spellCheck noValidate={false}/>

    // Rule #4: the class attribute is written as 'className'
    // <div className='divider' />

    // Rule #5: in-line style are provided as object
    // <div style={{padding:'5px'}}/>

}
```


```js
function ProfileCard(props) {
    // const title = props.title;
    // const handle = props.handle;

    // const {title, handle} = props;
}
function ProfileCard({title, handle}) {
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}
```

## Passing data from parent to child
### Parent
```js
import  {useState} from "react";
import AnimalShow  from "./AnimalShow";

function AnimalApp() {
    const [animals, setAnimal] = useState([]);

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />;
    });

    return (<div>{renderedAnimals}</div>);
}

export default AnimalApp
```

### Child
```js
import {useState} from "react";

function AnimalShow({animal}) {
    return (<div>animal</div>);
}

export default AnimalShow
```

## Passing data from child to parent
### Child
```js
import {useState} from 'react';

function SearchBar({parentMethodName}) {
    const [searchValue, setSearchValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        parentMethodName(searchValue)
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (<form onSubmit={handleFormSubmit}>
                <input value={searchValue} onChange={handleChange} />
            </form>)
}

export default SearchBar;
```

### parent
```js
import SearchBar from "./components/SearchBar";
import searchImages from "./../api";
import  {useState} from "react";

function PicApp() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (searchValue) => {
        const imagesResult = await searchImages(searchValue);
        setImages(imagesResult);
    }
    return (
        <div>
            <SearchBar parentMethodName={handleSubmit} />
            <ImageList images={images} />  // passing data to diff child component
        </div>
    )
}


export default PicApp;
```

```js
const [colors, setColors] = useState(['red', 'green']);

const addColorAtIndex = (colorToAdd, index) => {
  const updatedColors = [
    ...colors.slice(0, index),
    colorToAdd,
    ...colors.slice(index),
  ];
  setColors(updatedColors);
};

```


## local json db
```
npm install json-server@0

create the db json file

update package.json file under the scripts object, `"bookServer": "json-server -p 3001 --watch src/books/db.json"`

run 'npm start bookServer' in terminal
```


## useEffect Function
always call on first time render, and depending on the 2nd argument it may or may not call,
* [] -> only call on first time render
```js
useEffect(() =>{ fetchBooks() }, [] )
```

* call every rerender
```js
useEffect(() =>{ fetchBooks() })
```
* [counter] -> call on first render and only call when counter variable changed
```js
useEffect(() =>{ fetchBooks(), [counter] })
```


## Context

```js
// BooksContext.js
import { createContext, useState } from 'react';
const BooksContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(0);
    
    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    };
    
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}


// top parent component
import BooksContext from './booksContext/context/books'
root.render(
    <BooksContext.Provider value={ 5 } >
        <BookContextApp />
    </BooksContext.Provider>
)


// access value from component
import BooksContext from './booksContext/context/books'

function MyComponent() {
    const num = useContext(BooksContext)
}
```