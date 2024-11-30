import React from 'react';
import App from '../App';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <App></App>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;