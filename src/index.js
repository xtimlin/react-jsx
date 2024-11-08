import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppComponent from './AppComponent/AppComponent';
// import AnimalApp from "./Animal/AnimalApp";
// import PicApp from './Pics/PicApp';
// import BookApp from './books/BookApp';
// import BookContextApp from './booksContext/BookContextApp';
// import {Provider} from './booksContext/context/books'
// import './books/index.css'
import CompApp from './comps/CompApp'
import {NavigationProvider} from './comps/context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


// root.render(<AppComponent />)
// root.render(<AnimalApp />);
// root.render(<PicApp />);
// root.render(<Provider><BookContextApp /></Provider>)
// root.render(<CompApp />)

root.render(
    <NavigationProvider>
        <CompApp />
    </NavigationProvider>
)