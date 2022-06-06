import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navWrapper">
            <div className="navLeft">
                <div className="name">Alvin</div>
                <span>Toogle</span>
            </div>
            <div className="navRight">
                <div className="navList">
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className="btn">Contact Me</button>
            </div>
        </div>
    )
};

export default Navbar