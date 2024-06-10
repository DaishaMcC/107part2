
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import ShoppingList from './pages/shoppingList';
import GlobalProvider from './context/globalProvider';
import Cart from './pages/cart';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>


      <Footer />
    </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
