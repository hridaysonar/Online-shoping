import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Singel from './Singel';

const Book = () => {
    const [allBooks ,setallBokks]= useState([]);

    const getBooks =useLoaderData()
    console.log(getBooks);
    return (
        <div>
            
            <h1 className='text-3xl text-center p-6'>Books</h1>
           <div className=' grid grid-cols-3' >
           {
                getBooks.map(book =><Singel key={book.bookId} book={book}></Singel>)
            }
           </div>
        </div>
    );
};

export default Book;