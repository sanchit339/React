import { useSelector } from "react-redux"
import ItemList from "./ItemList";
import {useDispatch} from "react-redux"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // Subscribe the Store (to a Specific portion of the Store)
    const cartItems = useSelector((store) => store.cart.items); 
    const dispatch = useDispatch();
    const dispatchEvent = () => {
        dispatch(clearCart()); // dispatch + reducer form the cartSlice
    }
    return (
        <div className=" text-center m-4 p-4">
            <h1 className="text-2xl font-bold"> Cart</h1> 
            <div className=" w-6/12 m-auto">
                <button className=" p-2 m-2 bg-red-500 text-white rounded-lg"
                    onClick={dispatchEvent}
                >
                    Clear Cart
                </button>
                { cartItems.length === 0 && (
                    <h1>Cart is Empty, Please add something</h1>
                )}
                <ItemList items = {cartItems}
                    setCartPrice = {() => setCartPrice(cartPrice)}
                />
            </div>
        </div>
    )
}

export default Cart;