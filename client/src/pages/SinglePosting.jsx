import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_SINGLE_POSTING} from '../utils/queries';
import '../styles/single-post.css';
import logosvg from '../img/Logo.svg'
import active from '../img/status/active.png';
import profile65 from '../img/profiles/1.svg';
import StarRating from '../components/StarRating';




function SinglePosting() {

    const singlePostingId = useParams();

    console.log(singlePostingId)

    const {loading, data} = useQuery (GET_SINGLE_POSTING, {
        variables: singlePostingId 
    });

    console.log(data)

    const singlepost = data?.singlePosting || [];

  return (
    <div className='header-and-post-container'>
      <header className="admin-main-header">
        <div className="sidebar-top">
              <img className="navbar-logo" src={logosvg}/>
              <span>OddJobs</span>
          </div>
          <div className="admin-back-button">
               <div>Back</div>
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
              <button className='job-post-apply-button'>APPLY</button>
            </div>
          </div>
          <div className='right-job-post-container'>
            <div className="job-applicants-container">
              <div className="username-and-pic-container">
                  <img src={profile65} className="job-applicant-profile-pic" />
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