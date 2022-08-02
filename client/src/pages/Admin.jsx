import React, {useState, useEffect} from "react";
import "../styles/AccountStyles/Account-Header.css";
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import logosvg from '../img/Logo.svg';

// import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import MyAccount from "../components/Account-Components/My-Account"
import MyListings from "../components/Account-Components/My-Listings";
import Applied from "../components/Account-Components/Applied";
import Applications from "../components/Account-Components/Applications"
import UpdatePosting from "./UpdatePosting";
import { motion } from 'framer-motion';

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

    const logoVariant = {
        hidden: {
          opacity: 0,
        //   pathLength: 0,
          y: -100
        },
        visible: {
          opacity: 1, 
        //   pathLength: 1,
          y: 0,
          transition: {
            duration: 2,
            ease: "easeInOut"
          }
          
        }
    }

    const sidebarVariant = {
        hidden:{
          x: -800
        },
        visible:{
          x: 0,
          transition: {
            duration: 0.5
          }
        }
    }

    return (
        (Auth.loggedIn()) ? (

        <div className="adminBody">
            <motion.div variants={sidebarVariant} initial="hidden" animate="visible" className="sidebar">
                <div className="sidebar-top">
                <svg class="navbar-logo"  width="73" height="66" viewBox="0 0 73 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_15_13)">
                  <motion.path variants={logoVariant} d="M9.98819 49.8924C12.6652 51.7582 17.0054 51.7582 19.6824 49.8924C22.3592 48.0265 22.3592 45.0012 19.6824 43.1353C17.0054 41.2695 12.6652 41.2695 9.98819 43.1353C7.31123 45.0012 7.31123 48.0265 9.98819 49.8924Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M37.7726 24.5539C41.7881 27.3527 48.2983 27.3527 52.3139 24.5539C56.3292 21.755 56.3292 17.2173 52.3139 14.4185C48.2983 11.6197 41.7881 11.6197 37.7726 14.4185C33.7573 17.2173 33.7573 21.755 37.7726 24.5539Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M23.0235 37.2231C26.3697 39.5554 31.795 39.5554 35.1411 37.2231C38.4873 34.8907 38.4873 31.1093 35.1411 28.7769C31.795 26.4447 26.3697 26.4447 23.0235 28.7769C19.6773 31.1093 19.6773 34.8907 23.0235 37.2231Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M1.50579 35.5339C3.51351 36.9333 6.76866 36.9333 8.77639 35.5339C10.7841 34.1345 10.7841 31.8657 8.77639 30.4661C6.76866 29.0668 3.51351 29.0668 1.50579 30.4661C-0.501931 31.8657 -0.501929 34.1345 1.50579 35.5339Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M23.0235 10.1954C26.3697 12.5277 31.795 12.5277 35.1411 10.1954C38.4873 7.86306 38.4873 4.08159 35.1411 1.74926C31.795 -0.583086 26.3697 -0.583087 23.0235 1.74926C19.6773 4.08159 19.6773 7.86306 23.0235 10.1954Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M9.98818 22.8647C12.6651 24.7306 17.0054 24.7306 19.6824 22.8647C22.3592 20.9988 22.3592 17.9736 19.6824 16.1077C17.0054 14.2419 12.6651 14.2419 9.98818 16.1077C7.31122 17.9736 7.31124 20.9988 9.98818 22.8647Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M23.0235 64.2508C26.3697 66.5831 31.795 66.5831 35.1411 64.2508C38.4873 61.9184 38.4873 58.137 35.1411 55.8046C31.795 53.4723 26.3697 53.4723 23.0235 55.8046C19.6773 58.137 19.6773 61.9184 23.0235 64.2508Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M55.4471 38.0678C59.4626 40.8665 65.973 40.8665 69.9884 38.0678C74.0039 35.269 74.0039 30.7312 69.9884 27.9324C65.973 25.1335 59.4626 25.1335 55.4471 27.9324C51.4318 30.7312 51.4318 35.269 55.4471 38.0678Z" fill="#25CAAC"/>
                  <motion.path variants={logoVariant} d="M37.7726 51.5814C41.7881 54.3804 48.2983 54.3804 52.3139 51.5814C56.3292 48.7827 56.3292 44.245 52.3139 41.4461C48.2983 38.6474 41.7881 38.6474 37.7726 41.4461C33.7573 44.245 33.7573 48.7827 37.7726 51.5814Z" fill="#25CAAC"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_15_13">
                  <rect width="73" height="66" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                    
                    <span>OddJobs</span>
                </div>
                <div className="options">
                    <section onClick={() => {setCurrentPage('myAccount'); setTitle('My Account')}}  className= {currentPage === "myAccount" ? 'selected-tab' : ''}>My Account</section>
                    <section onClick={() => {setCurrentPage('myListings'); setTitle('My Listings')}} className= {currentPage === "myListings" ? 'selected-tab' : ''}>My Listings</section>
                    <section onClick={() => {setCurrentPage('applied'); setTitle('Applied')}} className= {currentPage === "applied" ? 'selected-tab' : ''}>Applied</section>
                    <section onClick={() => {setCurrentPage('applications'); setTitle('Applications Received')}} className= {currentPage === "applications" ? 'selected-tab' : ''}>Applications Received</section>
                </div>
            </motion.div>

            <div className="header-and-component-container">
                <header className="admin-main-header">
                    <h1 className="admin-title">{title}</h1>
                    <div className="admin-back-button" >
                       <Link to={`/home`} style={{ textDecoration: 'none', color:'#64FFDB' }}> <div>Home</div> </Link>
                    </div>
                </header>

                {renderPage()}

            </div>
        </div>
    
        ) : (
            <Navigate to="/"/>
        )
    );
}

export default Account;