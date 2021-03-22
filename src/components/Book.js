import React from 'react'

const Book = ({book}) => {


    return (
        <div>
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
        </div>
    )
}

export default Book
