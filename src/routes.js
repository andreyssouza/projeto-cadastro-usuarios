import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home';
import Users from './Containers/Users';

function MyRoutes() {


    return (
        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/Users' element={<Users/>} />

            </Routes>

        </BrowserRouter>


    )
}

export default MyRoutes