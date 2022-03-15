import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { AdminScreen } from '../components/administration/AdminScreen';
import { Area } from '../components/administration/pages/Area';
import { Home } from '../components/administration/pages/Home';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                    {/* <Route  path="/" element={<LoginScreen/>} /> */}
                   <Route  path="/" element={<AdminScreen/>} >
                        <Route index element={<Home />} />
                        <Route path="area" element={<Area />} />
                   </Route>
    
            </Routes>
        
        </BrowserRouter>
    )
}


       
