import { IMG_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Header = () =>{
    const [loginBtn , setLogout] = useState("Login");
    const {loggedInUser} = useContext(userContext);
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between shadow-md">
            <div className="image">
                <img className=" w-36 " src= {IMG_URL} ></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2">
                        Online Status : {onlineStatus ? "✅" : "⛔️"}
                    </li>
                    <li className="px-2">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about"> About Us </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact"> ContactUs </Link>
                    </li>
                    <li className="px-2">
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                    <li className="px-2">
                        Cart
                    </li>

                    <button
                        onClick={() =>{
                            loginBtn === "Login" ?
                            setLogout("Logout") : setLogout("Login"); // the diff algorithm just chages this btn in the object (recursively)
                        }}
                    >
                    <li className="px-2">
                        {loginBtn}
                    </li>
                    </button>
                    <li className=" font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;