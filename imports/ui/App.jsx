import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './materialui/theme';

import { Albuns } from './pages/Albuns';
import { Home } from './pages/Home';



export default function App() {
  return (
    <ThemeProvider theme={ theme }>	
		  <BrowserRouter>      
        <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/albuns" element={ <Albuns /> } exact />
        </Routes>       
		  </BrowserRouter>
    </ThemeProvider>
  );
}