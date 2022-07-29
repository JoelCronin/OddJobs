import React, { useState } from "react";
import "../styles/AccountStyles/Account-Header.css"
// import AccountNav from "../components/Account-Components/Account-Nav"
import MyAccount from "../components/Account-Components/My-Account"
import MyListings from "../components/Account-Components/My-Listings";
import Applied from "../components/Account-Components/Applied";
import Applications from "../components/Account-Components/Applications"

import logo from '../img/logo.png'

function Account() {
    const [currentPage, setCurrentPage] = useState('myAccount');

    const renderPage = () => {
        if (currentPage === 'myAccount') {
            return <MyAccount/>;
        }
        if (currentPage === 'myListings') {
            return <MyListings/>;
        }
        if (currentPage === 'applied') {
            return <Applied/>;
        }
        if (currentPage === 'applications') {
            return <Applications/>;
        }
    }

    return (
        <div className="adminBody">
            <div className="sidebar">
                <div className="sidebar-top">
                    <img className="navbar-logo" src={logo}/> 
                    <span>OddJobs</span>
                </div>

                <div className="options">
                    <section onClick={() => setCurrentPage('myAccount')}>My Account</section>
                    <section onClick={() => setCurrentPage('myListings')}>My Listings</section>
                    <section onClick={() => setCurrentPage('applied')}>Applied</section>
                    <section onClick={() => setCurrentPage('applications')}>Applications Recived</section>
                </div>
            </div>

            <div className="header-and-component-container">
                <header className="admin-main-header">
                    <h1 className="admin-title">My Account</h1>
                    <div className="admin-back-button">
                        <div>Home</div>
                    </div>
                </header>

                {renderPage()}

            </div>
        </div>
    );
}

export default Account;