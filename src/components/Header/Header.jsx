import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchReducer } from '../../redux/reducers/cartReducer';

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const handleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    const handleSearch=()=>{
        setShowSearch(true);
        dispatch(searchReducer(searchInput));
    }
    const handleInputEnterKey = (event)=>{
        if(event.key === 'Enter'){
            handleSearch()
        }
    }
    return (
        <div className={`Header relative w-[95%] z-10 mb-10 sm:mb-0 max-w-[1400px] mx-auto h-16  flex items-center justify-between sm:px-10`}>

            {/* logo */}
            <div className="logo text-[20px]">
                <span className=' text-[var(--primaryColor)]'>Stationary</span>Store
            </div>

            {/* search input */}
            <div className="search absolute top-20 sm:top-0 left-0 w-full  sm:relative sm:w-fit sm:mx-0 flex items-center">
                <input className='w-full px-2 py-3 sm:py-0 bg-slate-100 rounded-lg' type="text" placeholder='Search' onChange={(e)=>setSearchInput(e.target.value)} onKeyDown={handleInputEnterKey} />
                <i className='fa-solid fa-magnifying-glass text-2xl sm:text-lg absolute right-2' onClick={handleSearch}></i>
            </div>

            {/* navbar */}
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