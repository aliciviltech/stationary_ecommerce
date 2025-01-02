import React from 'react'
import Header from './components/Header/Header'
import AllProducts from './components/AllProducts/AllProducts'
import './App.css'
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <AllProducts/>
      <Cart/>
    </div>
  )
}

export default App