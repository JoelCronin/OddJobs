import React from "react";
import "../../styles/AccountStyles/My-Listings.css";
import active from '../../img/status/active.png';
import { MdModeEdit } from 'react-icons/md';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';

function MyListings() {

  const myListingId = useParams();

  console.log(myListingId)

  const {loading, data} = useQuery (GET_ME, {
      variables: myListingId 
  });

  console.log(data)

  const myListings = data?.me || [];

  console.log(myListings)

    return (

        <div id="myListingsContainer">
            <div className='job-box add-box'>
                <BsPlusCircleFill className="add-button"/>
            </div>
            <div className='job-box'>
              <h1 className='job-price'><span>$</span>20</h1>
              <img className='job-post-img' src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
              <div className='job-post-decription-box'>
                <div className='job-post-description-top'>
                  <h1 className='job-title'>Wash Dishes</h1>
                  <div className='status-box'>
                    <h1 className='status-main-post'>Status</h1>
                    <span>
                      <img className='status-symbol-main' src={active}/>
                    </span>
                  </div>
                </div>
                <div className='job-post-description-bottom'>
                <h1 className='job-post-owner'>Chris</h1>
                  <h1 className='job-post-date'>1hr ago</h1>
                </div>
              </div>
              <MdModeEdit className="edit-button"/>
            </div>
            <div className='job-box'>
              <h1 className='job-price'><span>$</span>20</h1>
              <img className='job-post-img' src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
              <div className='job-post-decription-box'>
                <div className='job-post-description-top'>
                  <h1 className='job-title'>Wash Dishes</h1>
                  <div className='status-box'>
                    <h1 className='status-main-post'>Status</h1>
                    <span>
                      <img className='status-symbol-main' src={active}/>
                    </span>
                  </div>
                </div>
                <div className='job-post-description-bottom'>
                <h1 className='job-post-owner'>Chris</h1>
                  <h1 className='job-post-date'>1hr ago</h1>
                </div>
              </div>
              <MdModeEdit className="edit-button"/>
            </div>
{/*           
            {myListings.activeJobs.length === 0 ? (<p>YOU DONT HAVE ANY JOBS</p>) : (
              <div className='job-box'>
                <h1 className='job-price'><span>$</span>20</h1>
                <img className='job-post-img' src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
                <div className='job-post-decription-box'>
                  <div className='job-post-description-top'>
                    <h1 className='job-title'>Wash Dishes</h1>
                    <div className='status-box'>
                      <h1 className='status-main-post'>Status</h1>
                      <span>
                        <img className='status-symbol-main' src={active}/>
                      </span>
                    </div>
                  </div>
                  <div className='job-post-description-bottom'>
                  <h1 className='job-post-owner'>Chris</h1>
                    <h1 className='job-post-date'>1hr ago</h1>
                  </div>
                </div>
                <MdModeEdit className="edit-button"/>
              </div>
            )} */}

            <div className="form-background">
                <div className="form-box">
                    <AiFillCloseCircle className="close-form-button"/>
                    <div className="form-left">
                        <div className="my-account-form">
                            <h1 className="my-acccount-form-title">Name</h1>
                            <input type="text" className="input-job-name" placeholder="Enter Name..."></input>
                        </div>
                        <div className="my-account-form">
                            <h1 className="my-acccount-form-title">Description</h1>
                            <textarea className="input-job-name input-description" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."></textarea>
                        </div>
                    </div>
                    <div className="form-right"></div>
                </div>
            </div>
        </div>
    );
}

export default MyListings;  