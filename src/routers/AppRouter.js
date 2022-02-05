import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Switch,
  } from "react-router-dom";
import { AdminScreen } from '../components/administration/AdminScreen';
import { Area } from '../components/administration/area/Area';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                    {/* <Route  path="/" element={<LoginScreen/>} /> */}
                   {<Route  path="/" element={<AdminScreen/>} />}
    
            </Routes>
        
        </BrowserRouter>
    )
}
       
