import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/OtherUserProfile.css'
import {GET_SINGLE_USER} from '../utils/queries';
import logosvg from '../img/Logo.svg';
import { Link } from 'react-router-dom';
import profile17 from '../img/profiles/4.svg';
import StarRating from "../components/StarRating";
import { motion } from 'framer-motion';



function OtherUserProfile() {

    const singleUserId = useParams();
    
    const {loading, data} = useQuery (GET_SINGLE_USER, {
        variables: singleUserId
    });
    
    console.log(data)

    const singleOtherUser = data?.singleUser || [];

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

    const componentVariant = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.45
            }
        }
    }

  return (
    <div className="adminBody">
        <motion.div variants={sidebarVariant} initial="hidden" animate="visible" className="sidebar">
            <div className="sidebar-top">
                <img className="navbar-logo" src={logosvg}/>
                
                <span>OddJobs</span>
            </div>
            <div className="options">
                <section className='selected-tab'>User Profile</section>
            </div>
        </motion.div>

        <motion.div variants={componentVariant} initial="hidden" animate="visible" className="header-and-component-container">
            <header className="admin-main-header">
                <h1 className="admin-title">User Profile</h1>
                <div className="admin-back-button" >
                    <Link to={`/home`} style={{ textDecoration: 'none', color:'#64FFDB' }}> <div>Home</div> </Link>
                </div>
            </header>

            <div className="my-account-outer-body">
                <div className="my-account-body">
                    <div className="profile-and-signout">
                        <img className="my-account-profile-pic" src={profile17}/>
                    </div>

                    <div className="my-account-form-box">
                        <div className="my-account-form">
                            <h1 className="my-acccount-form-title">Name </h1>
                            <div className="my-account-data-box">

                                <h1 className="my-account-form-data">{singleOtherUser.name}</h1>

                            </div>
                        </div>
                        <div className="my-account-form">
                            <h1 className="my-acccount-form-title">Email</h1>
                            <div className="my-account-data-box">
                                <h1 className="my-account-form-data">{singleOtherUser.email}</h1>
                            </div>
                        </div>
                        <div className="my-account-form">
                            <h1 className="my-acccount-form-title">Rating</h1>
                            <div className="my-account-data-box">
                                <div className="my-account-star-rating">
                                    <StarRating rating={5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </motion.div>
    </div>
  )
}


export default OtherUserProfile;