import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './materialui/theme';

import { Album } from './pages/Album';
import { Galeria } from './pages/Galeria';
import { Home } from './pages/Home';



export default function App() {
  return (
    <ThemeProvider theme={ theme }>	
		  <BrowserRouter>      
        <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/galeria" element={ <Galeria /> } />
          <Route path="/album/:albumId" element={ <Album /> } />
        </Routes>       
		  </BrowserRouter>
    </ThemeProvider>
  );
}