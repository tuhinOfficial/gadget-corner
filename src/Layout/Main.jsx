import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../Shared/TopBar/TopBar';
import Navbar from '../Shared/Navbar/Nav';

const Main = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;