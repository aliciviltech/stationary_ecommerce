import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge } from "antd";
import { removeItem } from '../../redux/reducers/cartReducer';

const Cart = () => {
    const stateData = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const [showDrawer, setShowDrawer] = useState(false)
    return (
        <div className="Cart">
            <div className='cursor-pointer fixed bottom-2 right-6 w-fit ' onClick={() => setShowDrawer(!showDrawer)}>
                <Badge count={stateData?.cartItems.length}>
                    <i className='fa-solid fa-cart-shopping text-2xl'></i>
                </Badge>
            </div>

            {/* ======================== cart drawer ============================ */}
                        
            <div className={`cartDrawer ${showDrawer ? 'top-0':'top-[-640px]'} z-20 sm:w-[500px] transition-all fixed right-0 bg-white shadow-2xl border border-black`}>
                {/* header */}
                <div className="header flex justify-between p-2">
                    <div className="heading">Shoping Cart</div>
                    <div className="close cursor-pointer" onClick={()=>setShowDrawer(false)}>Close <i className='fa-solid fa-close'></i></div>
                </div>
                <div className="borderLine h-[2px] w-[90%]  mx-auto mt-2 bg-gray-500"></div>
                
                {/* body */}
                <div className="cartItemsContainer w-[100vw] sm:w-[500px] max-h-[540px] overflow-auto p-4 sm:p-8 flex flex-col gap-4 ">
                    {
                        stateData?.cartItems.length > 0 ?
                        stateData?.cartItems.map((item) => {
                            return (
                                <div key={item.id} className="itemContainer flex gap-2 ">
                                    <div className="image"><img className='w-14 h-14 object-contain' src={item.imageURL} alt="itemImage" /></div>
                                    <div className="text flex-1 flex flex-col">
                                        <h1 className='font-bold'>{item.title}</h1>
                                        <p>Qty: {item.quantity}  PKR: {item.price*item.quantity}/-</p>
                                        <div className="removeItem text-right"><i className='fa-solid fa-trash hover:text-red-500' onClick={()=>dispatch(removeItem(item.id))}></i></div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h1 className='text-center'>No items added</h1>
                    }
                </div>

                {/* footer */}
                {
                    stateData?.cartItems.length>0 && 
                    <>
                <div className="borderLine h-[2px] w-[90%]  mx-auto mt-2 bg-gray-500"></div>
                <div className="header flex justify-between p-2">
                    <div className="heading">Total: {stateData?.cartItems.reduce((acc, curr)=> acc + curr.price*curr.quantity ,0)}</div>
                    <div className="checkout cursor-pointer bg-[var(--primaryColor)] text-white px-2 ">Checkout</div>
                </div>
                </>
                }
                
            </div>
               
        </div>
    )
}

export default Cart