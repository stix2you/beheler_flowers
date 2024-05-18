import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainView from './components/MainView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Events from './components/Events';
import Products from './components/Products';
import About from './components/About'; // Import the new About component

function App() {
   const basename = process.env.NODE_ENV === 'development' ? '/' : '/beheler_flowers';

   return (
      <Router basename={basename}>
         <div className="App">
            <Navbar />
            <div className="main-content">
               <Routes>
                  <Route path="/beheler_flowers" element={<MainView />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/events" element={<Events />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
