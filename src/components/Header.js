import { IMG_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux"

const Header = () =>{
    const [loginBtn , setLogout] = useState("Login");
    const {loggedInUser} = useContext(userContext);
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items); // provide what you want to access

    return(
        <div className="flex justify-between shadow-md ">
            <div className="image mx-56">
                <Link to="/"><img className=" w-10 my-4 " src= {IMG_URL} ></img></Link>
            </div>
            <div className="flex items-center mx-48">
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
                    <li className="px-2 ">
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                    <li className="px-2 ">
                        <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
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