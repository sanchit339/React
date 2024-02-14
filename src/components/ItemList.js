import { swiggy_img } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({items , setCartPrice}) => {

    const dispatch = useDispatch();
    const HandleAddItem = (item) => {
        // dispatch an action to the store  
        dispatch(addItem(item))
        // the passed arg will become the payload
        // {
                // "arg passed" here
        // }
        //  this will be passed as the second argument into the store
    };

    return (
        <div>
            {items?.map((item) => (
                <div key={item?.card?.info?.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className=" w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹{item?.card?.info?.price / 100}</span>
                        </div>
                        <p className=" text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg text-green-500 bg-slate-100 shadow-xl text-xs" 
                                // onClick={HandleAddItem}   // handle the DisPatch --- just calling function defined
                                // onClick={HandleAddItem(item)}  directly calling the function
                                onClick={() => HandleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img src={swiggy_img + item?.card?.info?.imageId} className="w-20 rounded-xl shadow-lg"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;