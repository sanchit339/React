import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    const [loginBtn , setLogout] = useState("Login");

    return(
        <div className="header">
            <div className="image">
                <img className="logo" src= {IMG_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About Us </Link>
                    <Link to="/contact"> ContactUs </Link>
                    <li>Cart</li>
                    <button
                        onClick={() =>{
                            loginBtn === "Login" ?
                            setLogout("Logout") : setLogout("Login"); // the diff algorithm just chages this btn in the object (recursively)
                        }}
                    >
                    {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;