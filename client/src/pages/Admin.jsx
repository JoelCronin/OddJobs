import React, {useState, useEffect} from "react";
import "../styles/AccountStyles/Account-Header.css"
import { Link } from 'react-router-dom';


import Auth from '../utils/auth';

import MyAccount from "../components/Account-Components/My-Account"
import MyListings from "../components/Account-Components/My-Listings";
import Applied from "../components/Account-Components/Applied";
import Applications from "../components/Account-Components/Applications"
import UpdatePosting from "../components/Account-Components/UpdatePosting";

import logo from '../img/logo.png';




function Account() {
    const [currentPage, setCurrentPage] = useState('myAccount');
    const [title, setTitle] = useState('My Account')
    

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
        if (currentPage === 'updatePostings') {
            return <UpdatePosting/>;
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
                    <section onClick={() => {setCurrentPage('myAccount'); setTitle('My Account')}}  className= {currentPage === "myAccount" ? 'selected-tab' : ''}>My Account</section>
                    <section onClick={() => {setCurrentPage('myListings'); setTitle('My Listings')}} className= {currentPage === "myListings" ? 'selected-tab' : ''}>My Listings</section>
                    <section onClick={() => {setCurrentPage('applied'); setTitle('Applied')}} className= {currentPage === "applied" ? 'selected-tab' : ''}>Applied</section>
                    <section onClick={() => {setCurrentPage('applications'); setTitle('Applications Received')}} className= {currentPage === "applications" ? 'selected-tab' : ''}>Applications Received</section>
                </div>
            </div>

            <div className="header-and-component-container">
                <header className="admin-main-header">
                    <h1 className="admin-title">{title}</h1>
                    <div className="admin-back-button">
                       <Link to='/home'> <div>Home</div> </Link>
                    </div>
                </header>

                {renderPage()}

            </div>
        </div>
    );
}

export default Account;