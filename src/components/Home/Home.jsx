import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import AllProducts from '../AllProducts/AllProducts'
import Cart from '../Cart/Cart'

const Home = () => {
    const [moveTopBtn, setMoveTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                setMoveTopBtn(true);
            } else {
                setMoveTopBtn(false);
            }
        })
    }, [])
    return (
        <div className='Home'>
            <Header />
            <AllProducts />
            <Cart />
            {
                moveTopBtn &&
                <div className="moveToTop bg-[var(--primaryColor)] w-fit py-1 px-2 rounded-full fixed bottom-2 right-4" onClick={() => { window.scrollTo({ top: 0 }) }}>
                    <i className='fa-solid fa-angle-up'></i>
                </div>
            }
        </div>
    )
}

export default Home