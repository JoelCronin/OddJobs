import React from "react";
import "../styles/AccountStyles/Account-Header.css"

// import AccountNav from "../components/Account-Components/Account-Nav"
import MyAccount from "../components/Account-Components/My-Account"
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

            <div className="header-and-component-container">
                <header className="admin-main-header">
                    <h1 className="admin-title">My Account</h1>
                    <div className="admin-back-button">
                        <div>Home</div>
                    </div>
                </header>

                <MyAccount />
            </div>
        </div>
    );
}

export default Account;