import React from "react";
import "../../styles/AccountStyles/My-Listings.css";
import active from '../../img/status/active.png';
import { MdModeEdit } from 'react-icons/md';
import { BsPlusCircleFill } from 'react-icons/bs';
import { TbCloudUpload } from 'react-icons/tb';


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
          <div className="all-my-listings">
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
            {/* {myListings.activeJobs.length === 0 ? (<p>YOU DONT HAVE ANY JOBS</p>) : (
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
          </div>

          {/* <div className="form-and-buttons-container">
            <div className="form-container">
              <div className="form-background">
                <div className="form-left">
                  <div className="my-account-form">
                    <h1 className="my-acccount-form-title">Name</h1>
                    <input className="add-input-name" type="text" placeholder="Enter name...."></input>
                  </div>
                  <div className="my-account-form">
                    <h1 className="my-acccount-form-title">Description</h1>
                    <textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboriquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elim ad minim veniam, quis nostrud exercitation ullamco labo" className="description-text-area"></textarea>
                  </div>
                </div>
                <div className="form-right">
                  <div className="upload-pic-box">
                    <div className="upload-components-box">
                      <TbCloudUpload className="upload-file-logo"/>
                      <h1 className="upload-file-title">Select a file or drag and drop here</h1>
                      <h1 className="upload-file-specifics">JPG, PNG, or PDF, file size no more than 10MB</h1>
                      <div className="upload-button-container">
                        <input type="file" name="upload-file-button" className="upload-file-button" />
                      </div>
                    </div>
                  </div>
                  <div className="status-and-price-container">
                    <div className="status-container">
                      <h1 className="status-title">Status</h1>
                      <div className="status-icon-and-dropdown">
                        <img className="status-icon-for-dropdown" src={active}/>
                        <select className="status-dropdown-list" name="status-dropdown-list">
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    </div>
                    <div className="price-container">
                      <h1 className="price-title">Price</h1>
                      <div className="price-input-container">
                        <span className="input-dollar-sign">$</span>
                        <input className="price-input"  placeholder="30" type="number"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <div className="inner-button-container">
                <div className="inner-inner-button-container">
                    <div className="listing-delete-button">
                       <div>Delete</div>
                    </div>
                </div>
                <div className="inner-inner-button-container">
                    <div className="listing-cancel-button">
                       <div>Cancel</div>
                    </div>
                </div>
                <div className="inner-inner-button-container">
                    <div className="listing-create-button">
                       <div>Create</div>
                    </div>
                </div>
              </div>
            </div>
          </div> */}


        </div>
    );
}

export default MyListings;  