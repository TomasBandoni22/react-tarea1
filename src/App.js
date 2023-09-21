import { BrowserRouter , Route , Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import ContactoPage from './ContactoPage';
import HomePage from './HomePage';
import NosotrosPage from './NosotrosPage';
import NovedadesPage from './NovedadesPage';

function App() {
  return (
    <div className='App'>
     
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nostros" element={<NosotrosPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>


      <Footer />


    </div>
  );
}

export default App;
