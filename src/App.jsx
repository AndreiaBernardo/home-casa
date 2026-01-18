import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SalaPage from './pages/SalaPage';
import QuartoPage from './pages/QuartoPage';
import CozinhaPage from './pages/CozinhaPage';
import BanheiroPage from './pages/BanheiroPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sala" element={<SalaPage />} />
            <Route path="/quarto" element={<QuartoPage />} />
            <Route path="/cozinha" element={<CozinhaPage />} />
            <Route path="/banheiro" element={<BanheiroPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

