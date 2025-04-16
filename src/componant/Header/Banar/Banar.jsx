import React, { useEffect, useState } from 'react';
import bookimge from '../../../assets/books.jpg'

const Banar = () => {
  
    return (
        <div className="flex justify-between items-center px-20 py-16 w-full">
        <div className="flex flex-col items-start gap-6 max-w-lg">
          <h1 className="text-4xl font-bold leading-snug text-gray-900">
            Books to freshen up<br />your bookshelf
          </h1>
          <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition cursor-pointer ">
            View The List
          </button>
        </div>
        <div>
          <img className="w-48 md:w-60 lg:w-72" src={bookimge} alt="Book cover" />
        </div>
      </div>
      

    );
};

export default Banar;