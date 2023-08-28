import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/Nav/NavBar.jsx';
import Home from "./pages/Home";
import ItemList from './pages/ItemList';
import ItemDetail from './Pages/ItemDetail';
import Cart from './pages/Cart';
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greetingMsg="Bienvenid@ a Zebra Store" />} />
        <Route path='/category/:id' element={<ItemList />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<></>} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      
    </BrowserRouter>
  )

}

export default App
