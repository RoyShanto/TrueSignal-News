import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <Navbar/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;