import React, { useState } from 'react'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    return (
        <div className={`Header relative w-[95%] z-10 mb-10 sm:mb-0 max-w-[1400px] mx-auto h-16  flex items-center justify-between sm:px-10`}>
            <div className="logo text-[20px]">
                <span className=' text-[var(--primaryColor)]'>Stationary</span>Store
            </div>
            <div className="search">
                <input className='absolute top-20 left-0 w-full  sm:static sm:w-fit sm:mx-0  px-2 py-3 sm:py-0 bg-slate-100 rounded-lg' type="text" placeholder='Search' />
            </div>
            <div className={`navBar ${showMenu ? 'right-0' : 'right-[-300px]'} transition-all duration-500 absolute lg:static top-16 flex flex-col gap-6 bg-white p-6 lg:p-0 shadow-2xl lg:shadow-0 lg:flex-row  lg:gap-6 lg:static`}>
                <a className='hover:text-[var(--primaryColor)]' href="">Home</a>
                <a className='hover:text-[var(--primaryColor)]' href="">About</a>
                <a className='hover:text-[var(--primaryColor)]' href="">Categories</a>
                <a className='hover:text-[var(--primaryColor)]' href="">Contact Us</a>
            </div>
            <div className="menuBars block lg:hidden" onClick={handleMenu}>
                <i className='fa-solid fa-bars'></i>
            </div>
        </div>
    )
}

export default Header