import React from 'react';

const Singel = ({ book }) => {
    return (
        <div className="card bg-base-100 w-80 shadow-md border">
            <figure className="px-4 pt-4">
                <img src={book.image} alt={book.bookName} className="rounded-xl h-52 object-contain" />
            </figure>
            <div className="card-body items-center text-center space-y-2">
                <div className="flex flex-wrap justify-center gap-1">
                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="card-title text-lg">{book.bookName}</h2>
                <p className="text-sm text-gray-600">By : {book.author}</p>
                <p className="text-sm font-light">{book.category}</p>
                <div className="flex items-center justify-between w-full">
                    <p className="text-sm">Rating: {book.rating}</p>
                    <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Singel;
