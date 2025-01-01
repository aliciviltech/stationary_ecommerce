import React from 'react'

const Header = () => {
  return (
    <div className='Header w-[95%] max-w-[1400px] mx-auto h-16  flex items-center justify-between px-10'>
        <div className="logo text-[20px]">
            <span className=' text-[var(--primaryColor)]'>Stationary</span>Store
        </div>
        <div className="search">
            <input className='px-2 bg-slate-100 rounded-lg' type="text" placeholder='Search' />
        </div>
        <div className="navBar flex gap-6">
            <a className='hover:text-[var(--primaryColor)]' href="">Home</a>
            <a className='hover:text-[var(--primaryColor)]' href="">About</a>
            <a className='hover:text-[var(--primaryColor)]' href="">Categories</a>
            <a className='hover:text-[var(--primaryColor)]' href="">Contact Us</a>
        </div>
    </div>
  )
}

export default Header