import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";


const routers = [
    {
        id:'router1',
        element: <Home/>,
        path:'/'
    },
    {
        id:'router2',
        element: <Checkout/>,
        path:'/checkout'
    }
]
export default routers