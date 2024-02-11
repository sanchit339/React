import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // using the boolean values
    const [onlineState , setOnlineState] = useState(true);

    useEffect(() => {
        window.addEventListener("online" , () => {
            setOnlineState(true);
        });

        window.addEventListener("offline" , () => {
            setOnlineState(false);
        })

    },[])
    
    return onlineState;
}

export default useOnlineStatus;