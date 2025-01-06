import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, saveAllProducts } from '../../redux/reducers/cartReducer';
import { getReq, postReq } from '../../api/axios';
import { AllProductsData } from '../../utils/AllProductsData';

const AllProducts = () => {
    const productsDataFromDB = useSelector(state=>state.cartReducer.AllProductsData);
    const dispatch = useDispatch();
    console.log(productsDataFromDB)
    
    // ================== getting all products locally =================
    const getProductsLocally = ()=>{
        dispatch(saveAllProducts(AllProductsData));
    }


    // ============== Add all products data to API / mongoDB ===========
    // const addAllProducts = async()=>{
    //     try{
    //         const allProducts = await postReq('/all_products/add_products', AllProductsData);
    //         console.log(allProducts?.data.data)
    //     }catch(err){
    //         console.log('error in getting products: ',err)
    //     }
    // }


    // ============== get data from API / mongoDB ===========
    // const getAllProducts = async()=>{
    //     try{
    //         const allProducts = await getReq('/all_products');
    //         console.log(allProducts?.data.data)
    //         dispatch(saveAllProducts(allProducts?.data.data));
    //     }catch(err){
    //         console.log('error in getting products: ',err)
    //     }
    // }

    useEffect(()=>{
        getProductsLocally()
    },[])

    return (
    <div className="AllProducts py-12 w-[95%] max-w-[1400px] mx-auto">
        <h1 className='font-bold my-6'>All Products</h1>
        {/* <button className='bg-red-500 ' onClick={addAllProducts}>add all products</button> */}
    <div className=' flex flex-wrap justify-center gap-4'>
        {
            productsDataFromDB?.map((item, index)=>{
                return(
                    <div key={item.id} className="ProductCard relative w-[300px] h-[400px] flex flex-col gap-4 rounded-lg shadow-2xl p-6">
                        <div className="image h-[230px]">
                            <img className='w-[100%] h-[100%] object-cover' src={item.imageURL} alt="img" />
                        </div>
                        <div className="text flex flex-col gap-2">
                            <h3 className="title font-bold">{item.title}</h3>
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