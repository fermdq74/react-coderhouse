import { useState } from 'react'
import './App.css'
import NavBar from './components/Nav/NavBar.jsx';
import ItemList from './components/Products/ItemListContainer.jsx';

function App() {

  const msg = "Bienvenid@ a Zebra Store"

  return (
    <>
      <NavBar />
      <ItemList
        greetingMsg={msg} 
      />
    </>
  )
}

export default App
