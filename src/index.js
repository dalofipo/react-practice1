
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
const Page = () => {
    return (
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

root.render(<Page/>);