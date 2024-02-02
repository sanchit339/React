import RestoCard from "./RestoCard";
import { useState } from "react";
import data from "../utils/staticData";
import Shimmer from "./Shimmer";


// Nerver use index = 0 as the keys (index is the index of the arr / list)
// not using keys <<< using index <<< using UUID 
const BodyComponent = () => {
    // const ['defaultState' , 'updatedState'] = useState('defaultVal' , 'UpdatedValue')
    // just Like 
    // let data = []; let data have empty val at the beginning

    const [currData , setData] = useState(data);
    const [filterResto , setFilterResto] = useState(data);

    const [searchText , setSerachText] = useState("");

    // Conditional Rendering
    return filterResto.hotels.length === 0 ? (
        <Shimmer />
    ):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    {/* here we want to pass to text inside the search to backend */}
                    <input type="text" className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                            setSerachText(e.target.value);
                        }}
                        />
                    <button className="searchText-btn"
                        onClick={() => {
                            console.log(searchText);
                            // filter the results
                            const searchHotels = data.hotels.filter((res) => 
                                res.cuisine.toLowerCase().includes(searchText.toLowerCase())
                            ) 
                            console.log(searchHotels);
                            setFilterResto({...currData , hotels:searchHotels});
                        }}
                    > 
                    Search   
                    </button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                       console.log("btn-clicked")
                       const newData = currData.hotels.filter(
                            hotel => hotel.rating >= (4.5)
                       )
                       console.log(newData);
                       setFilterResto({...currData , hotels:newData}); // it will update the hotesls' array
                    }}                    
                    >Top rated Resto's</button>
            </div>
            <div className="resto-container">
                {/* Passing Props */}
                {
                    filterResto.hotels.map((resto) =>(
                        // key helps to render properly
                        <RestoCard key = {resto.id} resData={resto}/> // always provide the key
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