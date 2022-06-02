import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Navbar from '../componants/Navbar/Navbar';
import Home from '../pages/Home'
import Form from '../pages/Form'
import theme from '../General/theme'
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";

export default function App() {

  return (
      <ThemeProvider theme={theme}>
           <BrowserRouter>
                  <Navbar/>
                        <Routes> 
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/products" element={<Form />} />
                            <Route path="/help" element={<Home />} />
                        </Routes>
              </BrowserRouter>
      </ThemeProvider>
  );
}

