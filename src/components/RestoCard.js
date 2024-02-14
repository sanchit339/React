import { useContext } from "react";
import { swiggy_img } from "../utils/constants";
import userContext from "../utils/UserContext";


// const Style = { // adding the style 
//     backgroundColor: "aliceblue" // --> Not Prefered method
//   style={Style} <-- using js like
// }

const RestoCard = ({resData}) => { // you can pass props else ({resName , cuisine}) --> Destructure
    const {name , cuisines , avgRating , cloudinaryImageId , sla} = resData;
    const { loggedInUser } = useContext( userContext );
    // Manual DeStr 
    return (
        <div className="m-4 p-4 w-72 rounded-2xl bg-[#F0F8FF] hover:scale-95 hover:transition-[5s] object-cover shadow-md">
            <img 
                className="food-logo rounded-2xl h-48 w-full object-cover object-center"
                src = {swiggy_img + cloudinaryImageId}
                alt="" />
            <h3 className="py-2 font-bold">{name}</h3>
            <h3> ✳️ {avgRating} {"• " + sla.slaString }</h3>
            <h3 className=" font-thin">{cuisines[0]}, {cuisines[1]}</h3>
            <h5 className="font-thin">context : {loggedInUser}</h5>
        </div>
    )
}

// Using higher-order function

export const withPromotedLabel = (RestoCard) => {
    return () => {
        // component will return jsx
        return (
            <div>
                <label> Promoted</label>
                <RestoCard />
            </div>
        )
    }
}

export default RestoCard;