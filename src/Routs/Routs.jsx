import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from './Root';
import ErrrorPage from '../pages/ErrorPage/ErrrorPage';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<ErrrorPage></ErrrorPage>,
        children:[{
            index: true,
            path:"/",
            Component:Home
        }]
    },
]);

export const Routs = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default router;
