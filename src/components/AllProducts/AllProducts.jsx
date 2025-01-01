import React from 'react'

const AllProducts = () => {
  return (
    <div className='AllProducts py-12 w-[95%] max-w-[1400px] mx-auto flex flex-wrap justify-center gap-4'>
        {
            [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,99,9].map((item, index)=>{
                return(
                    <div className="ProductCard w-[300px] h-[400px] flex flex-col gap-4 rounded-lg shadow-2xl p-6">
                        <div className="image h-[230px]">
                            <img className='w-[100%] h-[100%] object-cover' src="/images/my_pencil_dollar.jpg" alt="img" />
                        </div>
                        <div className="text flex flex-col gap-2">
                            <h3 className="title font-bold">My pencil {`(Wow)`} Dollor </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h2 className='font-bold bg-[var(--primaryColor)] text-[#fff] text-center p-1'>PKR: 210.00</h2>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AllProducts