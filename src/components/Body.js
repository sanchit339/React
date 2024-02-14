import RestoCard , { withPromotedLabel } from "./RestoCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

// Nerver use index = 0 as the keys (index is the index of the arr / list)
// not using keys <<< using index <<< using UUID 
const BodyComponent = () => {
    // const ['defaultState' , 'updatedState'] = useState('defaultVal' , 'UpdatedValue')
    // just Like 
    // let data = []; let data have empty val at the beginning

    const [currData , setData] = useState([]);
    const [filterResto , setFilterResto] = useState([]);

    const [searchText , setSerachText] = useState("");

    const { loggedInUser , setUserName } = useContext(userContext);

    const RestocardPromoted = withPromotedLabel(RestoCard);

    useEffect(() => {
        fetchData();
        console.log("Use Effect Called") // this will get render later to Body Render
    } , []);
    console.log("Body Render") // this will be printed First

    const fetchData = async () =>{
        // Fetch will return a promise
        const data1 = await fetch(SWIGGY_API)
        const json = await data1.json();
        console.log(data1);
        console.log(json + " hELLO WORLD");
        // We use the optional Chaining to handle this data
        setData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
        setFilterResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return(
            <h1>Looks like you're offline!!! Please Check your internet connection</h1>
        ) 

    // Conditional Rendering
    console.log(filterResto.restaurants);
    return (!filterResto.restaurants || filterResto.restaurants.length === 0) ? (
        <Shimmer />
    ) : (
        <div className="body my-1">
            <div className="filter flex p-2 justify-center">
                <div className="search space-x-1" >
                    {/* here we want to pass to text inside the search to backend */}
                    <input type="text" className="border border-solid border-black m-2 rounded-md pl-2" 
                        value={searchText}
                        onChange={(e) => {
                            setSerachText(e.target.value);
                        }}
                        placeholder="Chinese"
                    />
                    <button className="px-2 py-1 bg-green-300 rounded-lg"
                        onClick={() => {
                            // filter the results
                            const searchHotels = filterResto.restaurants.filter((res) => 
                                res.info.cuisines[0].toLowerCase().includes(searchText.toLowerCase())
                            ) 
                            setFilterResto({ restaurants: searchHotels });
                        }}
                    > 
                    Search   
                    </button>
                    <button className="px-2 py-1 bg-orange-500 rounded-lg"
                        onClick={() => {
                        const newData = filterResto.restaurants.filter(
                                hotel => hotel.info.avgRating >= (4.0)
                        )
                        setFilterResto({ restaurants: newData }); // it will update the hotesls' array
                        }}                    
                        >Top rated Resto's
                    </button>
                    <label className="font-thin"> UserName : </label>
                    <input type="text" className="border border-black px-2 rounded-md" 
                        placeholder="Context Implement"
                        onChange={(e) =>{
                            value = {loggedInUser}
                            setUserName(e.target.value)
                        }}        
                    />
                </div>
            </div>
            <div className="resto-container flex justify-center flex-wrap mx-32">
                {/* Passing Props */}
                {
                    filterResto.restaurants.map((resto) =>(
                        // key helps to render properly
                        <Link to={"restaurant/" + resto.info.id} key = {resto.info.id}>
                            <RestoCard  resData={resto.info}/>
                        </Link> // always provide the key
                    ))
                }
                {/* we will have sep somponent for the cards */}
                {/* <RestoCard Static data 
                    resName = "MC Donalds"
                    cuisine = "Cafe , Bevrages"
                /> */}
            </div>
        </div>
    )
}

export default BodyComponent;