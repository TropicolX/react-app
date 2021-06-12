import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

// JSX RULES
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

/* const Greeting = () => {
    return React.createElement(
        'div',
        {}, 
        React.createElement('h1', {}, 'hello world')
    );
} */

// Nested Components, React Tools

function BookList() {
    return (
        <section>
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            this is a book
        </article>
    )
}

const Image = () => <img src="" alt="" />


ReactDom.render(<BookList/>, document.getElementById('root'));