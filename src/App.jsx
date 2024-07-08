import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import Home from './pages/Home';
// Importa las otras páginas según las vayas creando

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define otras rutas aquí */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;