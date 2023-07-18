import React from 'react';
import ReactDOM from 'react-dom/client';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './componentes/Header';
import { Adicionar } from './rotas/Adicionar';
import { Biblioteca } from './rotas/Biblioteca';
import { Favoritos } from './rotas/Favoritos';


const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to bottom, #8A2BE2, #87CEEB);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Biblioteca />} />
        <Route path='/biblioteca' element={<Biblioteca />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/adicionar' element={<Adicionar />} />
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);