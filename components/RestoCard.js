import { IMG_URL } from "../utils/constants";

const Style = { // adding the style 
    backgroundColor: "aliceblue" // --> Not Prefered method
}

const RestoCard = ({resData}) => { // you can pass props else ({resName , cuisine}) --> Destructure
    // Manual DeStr 
    const {name , cuisine , rating} = resData;
    return (
        <div className="card" style={Style}>
            <img 
                className="food-logo"
                src = {IMG_URL}
                alt="" />
            <h3>{name}</h3>
            <h3>{cuisine}</h3>
            <h3>{rating}</h3>
            <h3>30 min </h3>
        </div>
    )
}

export default RestoCard;