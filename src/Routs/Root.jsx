import React from 'react';
import Navebar from '../componant/Header/Navebar';
import { Outlet } from 'react-router';
import Footer from '../componant/Fooder/Footer';

const Root = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;