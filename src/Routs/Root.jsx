import React from 'react';
import Navebar from '../componant/Header/Navebar';
import { Outlet } from 'react-router';
import Footer from '../componant/Fooder/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;