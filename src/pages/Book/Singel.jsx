import React from 'react';

const Singel = ({book}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-2 pt-2">
                    <img
                        src={book.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{book.bookName
                    }</h2>
                    <p>By : {book.author}</p>
                    
                    <div className="card-actions border-dashed ">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singel;