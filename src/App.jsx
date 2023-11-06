import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { HistorialPage } from './routes/HistorialPage';
import { CotizadorProvider } from './context/CotizadorContext';
import { HistorialProvider } from './context/HistorialContext';


export const App = () => {
  return (
    <HistorialProvider>
      <CotizadorProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/historial' element={<HistorialPage />}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </BrowserRouter>
      </CotizadorProvider>
    </HistorialProvider>
  )
}




