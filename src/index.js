import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppComponent from './AppComponent/AppComponent';
// import AnimalApp from "./Animal/AnimalApp";
// import PicApp from './Pics/PicApp';
import BookApp from './books/BookApp';
import './books/index.css'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


// root.render(<AppComponent />)
// root.render(<AnimalApp />);
// root.render(<PicApp />);
root.render(<BookApp />)