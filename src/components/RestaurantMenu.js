import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"
import RestoAccordian from "./RestoAccordian";
import { useState } from "react";


const RestaurantMenu = () => {

    // const params = useParams(); we are destructuring it
    // console.log(params);

    const {id} = useParams();

    const resData = useRestaurantMenu(id);
    const [showIndex , setShowIndex] = useState(1);

    if (!resData) {
        return <Shimmer />;
    }

    var i = 0;

    const restaurantInfo = resData?.data.cards[0].card.card.info;
    const Recommended = resData?.data.cards[1].card.card.gridElements.infoWithStyle.offers;
    
    const Accordian = resData?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    const {name , cuisines , avgRating , costForTwo , cloudinaryImageId} = restaurantInfo;
    return resData === null ? ( <Shimmer /> ) : (
        <div className=" text-center ">
            <div className="card">
                <div>
                    <div>
                        <h3 className="font-bold">{name}</h3>
                        <h3 className="font-light">{cuisines.join(',')}</h3>
                    </div>
                        <h3 className="font-light">₹{ costForTwo / 100 } for two</h3>
                </div>
                <h3>{avgRating}</h3>
                {/* <img className=" w-24"
                    src = {swiggy_img + cloudinaryImageId}
                    alt="" /> */}
            
                <ul className="">
                    {Recommended.map((offer) => (
                        <li key={offer.restId} className="p-4">
                            {offer.info.header}
                        </li>
                    ))}
                </ul>
                {/* We Want Accordians Here */}
                {Accordian.map((data ,index) => (
                    data?.card?.card?.title && 
                    <RestoAccordian 
                        key={data?.card?.card.title} 
                        resData={data.card.card} 
                        showItems = {index === showIndex ? true : false }
                        setShowIndex = {() => setShowIndex(index)} // passing function to set the varibale
                        // idx = {index}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;