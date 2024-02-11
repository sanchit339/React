import { MENU_API } from "../utils/constants";
import { useState , useEffect } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchParticularData();
    }, [])

    const fetchParticularData = async () => {
        const dataP = await fetch( MENU_API + resId );
        const json = await dataP.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;