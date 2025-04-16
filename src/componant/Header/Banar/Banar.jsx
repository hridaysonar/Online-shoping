import React from 'react';
import bookimge from '../../../assets/books.jpg'
const Banar = () => {
    return (
        <div>
            <div className=' flex justify-around items-center'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus, fugit omnis, vero praesentium hic natus tempore corporis voluptatibus accusantium repellendus ut unde fuga deleniti voluptatem officiis commodi culpa. Molestiae!</h1>
                <button className=' btn-primary'>test test</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimge} alt="" />
            </div>
        </div>
    );
};

export default Banar;