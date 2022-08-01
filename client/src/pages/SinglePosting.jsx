import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_SINGLE_POSTING} from '../utils/queries';
import '../styles/single-post.css';
import logosvg from '../img/Logo.svg'
import active from '../img/status/active.png';
import profile65 from '../img/profiles/profile65.svg';
import StarRating from '../components/StarRating';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { APPLY_FOR_JOB } from '../utils/mutations';
import { REMOVE_APPLICATION } from '../utils/mutations';
import IMAGES from '../img/profiles/index.js';




import Auth from "../utils/auth";
// import { MdKeyboardReturn } from 'react-icons/md';

function SinglePosting() {

    const singlePostingId = useParams();

    const {loading, data} = useQuery (GET_SINGLE_POSTING, {
        variables: singlePostingId 
    })

    const singlepost = data?.singlePosting || [];
    const owner = data?.singlePosting?.owner || [];
    const userIcon = IMAGES[owner.image];

    // Apply for Position Functionallity
    const [hasApplied, setHasApplied] = useState(false);
    const ID = Auth.getProfile().data._id;

    if(data) {
      singlepost.applications.map((input) => {
        if(input._id == ID) {
          if(hasApplied == false) {
            setHasApplied(true)
          }
        }
      })
    }

    const [applyForPosition] = useMutation(APPLY_FOR_JOB);
    const [removeApplication] = useMutation(REMOVE_APPLICATION);

    const handleApply = async (event) => {
      event.preventDefault();

      try {
        const { data } = await applyForPosition({
          variables: singlePostingId
        });

        window.location.reload();
      } catch (e) {
        console.error(e);
      }
    }

    const handleCancleApply = async (event) => {
      event.preventDefault();

      try {
        const { data } = await removeApplication({
          variables: singlePostingId
        });

        window.location.reload();
      } catch (e) {
        console.error(e);
      }
    }

  return (
    <div className='header-and-post-container'>
      <header className="admin-main-header">
        <div className="sidebar-top">
              <img className="navbar-logo" src={logosvg}/>
              <span>OddJobs</span>
          </div>
          <div className="admin-back-button">
            <Link to={`/home`} style={{ textDecoration: 'none', color:'#64FFDB' }}>
               <div>Back</div>
            </Link>
          </div>
      </header>
      <div className='single-post-container'>
        <div className='inner-post-container'>
          <div className='left-job-post-container'>
            <div className='inner-left-job-post-container'>
              <div className='job-post-box'>
                  <h1 className='job-post-price'><span>$</span>{singlepost.cost}</h1>
                  <img className='single-job-post-img' src={singlepost.image} alt={singlepost.title}/>
                  <div className='job-post-decription-box'>
                    <div className='job-post-description-top'>
                      <h1 className='job-title'>{singlepost.title}</h1>
                      <div className='status-box'>
                        <h1 className='status-main-post'>Status</h1>
                        <span>
                          <img className='status-symbol-main' src={active}/>
                        </span>
                      </div>
                    </div>
                  </div>
              </div>
              {hasApplied ? (
              <div>
                <button className='job-post-apply-button'>Already Applied</button>
                <button className='job-post-apply-button' onClick={handleCancleApply} style={{ color:'#B22222' }}>Cancel Apply</button>
              </div>             
              ) : (
              <button className='job-post-apply-button' onClick={handleApply}>APPLY</button>
              )}
            </div>
          </div>
          <div className='right-job-post-container'>
            <div className="job-applicants-container">
              <div className="username-and-pic-container">
                  <img src={userIcon} className="job-applicant-profile-pic" />
                  <h1 className="job-applicant-name">Dave Johnson</h1>
              </div>
              <div className="rating-container">
                  <StarRating rating={5}/>
              </div>
            </div>
            <div className='job-application-description-container'>
              <h1 className="job-application-description-container sp-description">Description</h1>
              <div type="text" className="jop-appication-description-text-area">{singlepost.description}</div>
            </div>
            <div className='job-application-description-container'>
              <h1 className="job-application-description-container sp-location">Location</h1>
              <div type="text" className="jop-appication-location">Map Placeholder...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SinglePosting;