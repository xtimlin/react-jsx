import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './AppComponent/AppComponent';
import AnimalApp from "./Animal/AnimalApp";


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(<AppComponent />)

// root.render(<AnimalApp />);