import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/Nav/NavBar.jsx';
import Home from "./pages/Home";
import ItemList from './pages/ItemList';
import ItemDetail from './Pages/ItemDetail';
import CartDetail from './pages/CartDetail';
import NotFound from "./pages/NotFound";
import CheckoutDetail from './pages/Checkout';
import CartProvider from './context/CartProvider';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home greetingMsg="Bienvenid@ a Zebra Store" />} />
          <Route path='/category/:id' element={<ItemList />} />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<CartDetail />} />
          <Route path='/checkout' element={<CheckoutDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )

}

export default App
