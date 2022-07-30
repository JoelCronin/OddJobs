import React, {useState, useEffect} from "react";
import "../styles/AccountStyles/Account-Header.css"


import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import MyAccount from "../components/Account-Components/My-Account"
import MyListings from "../components/Account-Components/My-Listings";
import Applied from "../components/Account-Components/Applied";
import Applications from "../components/Account-Components/Applications"

import logosvg from '../img/Logo.svg';



function Account() {
    const [currentPage, setCurrentPage] = useState('myListings');

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
                    <img className="navbar-logo" src={logosvg}/>
                    
                    <span>OddJobs</span>
                </div>
                <div className="options">
                    <section className='selected-tab' onClick={() => setCurrentPage('myAccount')}>My Account</section>
                    {/* <Link to={`/myListings/${Auth.getProfile().data._id}`}><section onClick={() => setCurrentPage('myListings')}>My Listings</section></Link> */}
                    <section onClick={() => setCurrentPage('myListings')}>My Listings</section>
                    <section onClick={() => setCurrentPage('applied')}>Applied</section>
                    <section onClick={() => setCurrentPage('applications')}>Applications Recived</section>
                </div>
            </div>

            <div className="header-and-component-container">
                <header className="admin-main-header">
                    <h1 className="admin-title">My Account</h1>
                    <div className="admin-back-button">
                       <Link className="admin-home-button" to='/home'> <div>Home</div> </Link>
                    </div>
                </header>

                {renderPage()}

            </div>
        </div>
    );
}

export default Account;