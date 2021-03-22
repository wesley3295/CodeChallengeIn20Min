import React from 'react'
import Book from './Book'
const BookList = ({books,addBook}) => {
    return (
        <div>
            {books.map(book =><Book  book={book}/>)}
            
        </div>
    )
}

export default BookList
