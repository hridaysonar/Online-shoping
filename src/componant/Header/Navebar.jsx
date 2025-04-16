import React from 'react';

const Navebar = () => {
  const navItems = [
    { title: 'Home', href: '#', active: true },
    { title: 'Listed Books', href: '#' },
    { title: 'Pages to Read', href: '#' },
  ];

  return (
    <div className="bg-[url('/path-to-stripe-background.png')] bg-repeat  shadow-sm w-full mt-5">
      <div className="navbar px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        
        
        <div className="font-bold text-xl text-gray-900">Book Vibe</div>

       
        <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          {navItems.map((item, idx) => (
            <li key={idx} className="m-2">
              <a
                href={item.href}
                className={`${
                  item.active
                    ? 'px-4 py-1 border border-green-500 text-green-600 rounded-full hover:bg-green-50 font-semibold'
                    : ''
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex gap-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition cursor-pointer">
            Sign In
          </button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
