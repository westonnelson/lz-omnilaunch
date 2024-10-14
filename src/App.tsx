import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OLAToken from './pages/OLAToken';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { ThemeProvider } from './contexts/ThemeContext';
import { Web3Provider } from './contexts/Web3Context';
import WalletConnect from './components/WalletConnect';
import CryptoTicker from './components/CryptoTicker';

function App() {
  return (
    <ThemeProvider>
      <Web3Provider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
              <WalletConnect />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ola-token" element={<OLAToken />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <CryptoTicker />
            <Footer />
          </div>
        </Router>
      </Web3Provider>
    </ThemeProvider>
  );
}

export default App;