import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Database from './pages/Database';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend/*" element={<Frontend />} />
          <Route path="/backend/*" element={<Backend />} />
          <Route path="/database" element={<Database />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;