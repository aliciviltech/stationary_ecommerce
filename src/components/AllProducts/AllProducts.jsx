import React from 'react'
import { AllProductsData } from '../../utils/AllProductsData'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/reducers/cartReducer';

const AllProducts = () => {
    const storeCheck = useSelector(state=>state.cartReducer);
    const dispatch = useDispatch();
    console.log(storeCheck)
    return (
    <div className="AllProducts py-12 w-[95%] max-w-[1400px] mx-auto">
        <h1 className='font-bold my-6'>All Products</h1>
    <div className=' flex flex-wrap justify-center gap-4'>
        {
            AllProductsData.map((item, index)=>{
                return(
                    <div key={item.id} className="ProductCard relative w-[300px] h-[400px] flex flex-col gap-4 rounded-lg shadow-2xl p-6">
                        <div className="image h-[230px]">
                            <img className='w-[100%] h-[100%] object-cover' src="/images/my_pencil_dollar.jpg" alt="img" />
                        </div>
                        <div className="text flex flex-col gap-2">
                            <h3 className="title font-bold">My pencil {`(Wow)`} Dollor </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='font-bold bg-[var(--primaryColor)] text-[#fff] text-center p-1 flex gap-4 items-center justify-center' onClick={()=>dispatch(addItem({...item, quantity:1}))}>Add to Cart <i className='fa-solid fa-cart-plus'></i></div>
                        </div>
                        <div className="priceTag absolute top-0 left-0 bg-yellow-300 px-2 font-bold text-lg">
                            PKR: {item.price}/-
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default AllProducts