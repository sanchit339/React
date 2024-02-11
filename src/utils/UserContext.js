import { createContext } from "react";

const userContext = createContext({
    // passing some default value
    loggedInUser : "Default User"
})

export default userContext;