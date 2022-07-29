import React, { useState } from "react";

import "../../styles/AccountStyles/My-Listings.css";
import active from '../../img/status/active.png';
import { MdModeEdit } from 'react-icons/md';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import UpdatePosting from "../../pages/UpdatePosting";


import Auth from "../../utils/auth";

function MyListings() {

    const iD = useParams()

    console.log(iD)

    const {loading, data} = useQuery (GET_ME, {
        variables: iD
    });

    console.log(data)

    const mine = data?.me || [];

    return (
        
       
        <div id="myListingsContainer">
          

            <Link to={`/me/newPost/${Auth.getProfile().data._id}`}>
              <div className='job-box add-box'>
                  <BsPlusCircleFill className="add-button"/>
              </div>
            </Link>
            <div>
            {mine.activeJobs.length === 1 ? (<p>YOU DONT HAVE ANY ACTIVE JOBS</p>) : ( 

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
                <h1 className='job-post-owner'>Chris {mine.name} </h1>
                  <h1 className='job-post-date'>1hr ago {mine.createdAt}</h1>
                </div>
              </div>
              <Link to= {`/updatePosting`}><MdModeEdit className="edit-button"/></Link> 
              
            </div>
             

             )}</div>
        
        
       </div>
    );
}

export default MyListings;