import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, saveAllProducts, searchReducer } from '../../redux/reducers/cartReducer';
import { AllProductsData } from '../../utils/AllProductsData';

const AllProducts = () => {
    const [showProducts, setShowProducts] = useState(AllProductsData);
    const productsDataFromDB = useSelector(state => state.cartReducer.AllProductsData);
    const searchInputValue = useSelector((state) => state.cartReducer.searchKeyword)

    const dispatch = useDispatch();
    console.log(productsDataFromDB)

    // const [priceInput, setPriceInput] = useState();
    // const handlePriceChange = (e)=>{
    //     setPriceInput(e.target.value)
    // }

    // ================== getting all products locally =================
    const getAllProductsLocally = () => {
        dispatch(saveAllProducts(AllProductsData));
        setShowProducts(AllProductsData)
    }

    useEffect(()=>{
        if (searchInputValue) {
            const updatedProducts = AllProductsData.filter((product) => product.title.toLowerCase().includes(searchInputValue.toLowerCase()))
            setShowProducts(updatedProducts)
        } else{
            getAllProductsLocally()
        }
    },[searchInputValue])


    // remove search results
    const removeSearchResults = ()=>{
        getAllProductsLocally()
        dispatch(searchReducer(''));
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
    //         console.log(allProducts?.data?.data)
    //         dispatch(saveAllProducts(allProducts?.data.data));
    //     }catch(err){
    //         console.log('error in getting products: ',err)
    //     }
    // }

    // ============== update data from API / mongoDB ===========
    // const updateAllProducts = async(id, data)=>{
    //     try{
    //         const allProducts = await putReq(`/all_products//update/${id}`, data);
    //         console.log(allProducts?.data.data)
    //         dispatch(saveAllProducts(allProducts?.data.data));
    //     }catch(err){
    //         console.log('error in getting products: ',err)
    //     }
    // }

    useEffect(() => {
        getAllProductsLocally()
    }, [])

    return (
        <div className="AllProducts py-12 w-[95%] max-w-[1400px] mx-auto">

            {
                searchInputValue ?
                <div>
                    <h1 className='w-fit my-6 bg-gray-200 px-3 py-1 cursor-pointer' onClick={removeSearchResults}> <i className="fa-solid fa-circle-arrow-left"></i> Back to All Products</h1>
                    <h1 className='font-bold'>Search Results for: {searchInputValue}</h1>
                </div>
                :
                <h1 className='font-bold my-6'>All Products</h1> 
            }
            {/* <button className='bg-red-500 ' onClick={addAllProducts}>add all products</button> */}
            <div className=' flex flex-wrap justify-center gap-4'>
                {
                    showProducts.length === 0 ?
                    <h1> No products found</h1>
                    :
                    showProducts?.map((item, index) => {
                        return (
                            <div key={item.id} className="ProductCard relative w-[300px] h-[400px] flex flex-col gap-4 rounded-lg shadow-2xl p-6">
                                <div className="image h-[230px] relative">
                                    <img className='w-[100%] h-[100%] object-cover' src={item.imageURL} alt="img" />
                                    {
                                        item.price !== 0 &&
                                        <div className="priceTag absolute bottom-0 left-0 bg-yellow-300 px-2 font-bold text-lg">
                                            PKR: {item.price}/-
                                        </div>
                                    }
                                </div>
                                <div className="text flex flex-col gap-2">
                                    <h3 className="title font-bold">{item.title}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className='font-bold cursor-pointer bg-[var(--primaryColor)] text-[#fff] text-center p-1 flex gap-4 items-center justify-center' onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}>Add to Cart <i className='fa-solid fa-cart-plus'></i></div>
                                </div>
                                {/* <div className="input flex gap-2">
                        <input type="text" className='border border-black' onChange={handlePriceChange} />
                        <button onClick={()=>updateAllProducts(item.id ,{...item, price:priceInput})}>update</button>
                        </div> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts