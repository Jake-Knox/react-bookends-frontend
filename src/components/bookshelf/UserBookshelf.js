import React from 'react';

const UserBookshelf = ({ bookshelfData }) => {

    return (
        <div>
            <h2>Shelf : {bookshelfData.shelfName}</h2>

            <ul className='books'>
                {bookshelfData.books.map((book) => (
                    <li className="book" key={book.id}>
                        <img src={book.thumbnail} alt={book.title} />
                        <h4>{book.title}</h4>
                        <h4>{book.author}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserBookshelf;
