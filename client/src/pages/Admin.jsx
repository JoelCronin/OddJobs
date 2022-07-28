import React from "react";
// import "../styles/Account.css"

// import AccountNav from "../components/Account-Components/Account-Nav"
// import MyAccount from "../components/Account-Components/My-Account"
// import MyListings from "../components/Account-Components/My-Listings";
// import Applied from "../components/Account-Components/Applied";
// import Applications from "../components/Account-Components/Applications"

import logo from '../img/logo.png'

function Account() {
    return (
        <div className="adminBody">
            <div className="sidebar">
                <div className="sidebar-top">
                    <img className="navbar-logo" src={logo}/> 
                    <span>OddJobs</span>
                </div>

                <div className="options">
                    <section>My Account</section>
                    <section>My Listings</section>
                    <section>Applied</section>
                    <section>Applications Recived</section>
                </div>
            </div>
        </div>
    );
}

export default Account;