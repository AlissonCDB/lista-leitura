import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './componentes/Header';
import { Biblioteca } from './rotas/Biblioteca';
import { Favoritos } from './rotas/Favoritos';
import { Adicionar } from './rotas/Adicionar';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
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

createRoot(document.getElementById('root')).render(
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


