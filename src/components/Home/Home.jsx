import React from 'react'
import Header from '../Header/Header'
import AllProducts from '../AllProducts/AllProducts'
import Cart from '../Cart/Cart'

const Home = () => {
    return (
        <div className='Home'>
            <Header />
            <AllProducts />
            <Cart />
        </div>
    )
}

export default Home