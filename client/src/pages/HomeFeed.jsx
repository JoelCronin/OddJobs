import React from 'react'
import { Navigate } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_POSTING, GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import '../styles/HomeFeedStyles/navbar.css';
import '../styles/HomeFeedStyles/feedBody.css';

import profilepic from '../img/Profile-pic.png';
import active from '../img/status/active.png';
// import logo from '../img/logo.png';
import logosvg from '../img/Logo.svg';
import profile17 from '../img/profiles/profile17.svg'

import Auth from '../utils/auth';



function HomeFeed() {

  const {loading, data } = useQuery(GET_POSTING);
  const postings = data?.posting || [];

  console.log(postings)

  return (
    (Auth.loggedIn()) ? (
    (loading) ? (
      <div>Loading...</div>
    ) : (       
    <div className="feedBody">
      <div className="sidebar">
          <div className="sidebar-top">
              <img className="navbar-logo" src={logosvg}/>
              <span>OddJobs</span>
          </div>
          <div className='sidebar-bottom'>
            <h1 className='price-range'>Price Range</h1>
            <div className='range-box'>
              <input className='range-start'type="number" placeholder='10'/>
              <input className='range-start'type="number" placeholder='90'/>
            </div>
            <hr className='sidebar-line'/>
            <h1 className='dollar-sign-one'>$</h1>
            <h1 className='dollar-sign-two'>$</h1>
            <div className='stats-cluster'>
              <div className='status-filter-container'>
                <h1 className='status-filter-title'>Status</h1>
                <div className='active-container'>
                  <BsFillCheckCircleFill className='status-checkmark-active'/>
                  <h1 className='active-check-name'>Active</h1>
                </div>
              </div>
              <div className='status-filter-container'>
                <div className='active-container'>
                  <BsFillCheckCircleFill className='status-checkmark-pending'/>
                  <h1 className='active-check-name'>Pending</h1>
                </div>
              </div>
              <div className='status-filter-container'>
                <div className='active-container'>
                  <BsFillCheckCircleFill className='status-checkmark-completed'/>
                  <h1 className='active-check-name'>Completed</h1>
                </div>
              </div>
            </div>
            <div className='filter-button-container'>
              <button className='filter-button'>Apply Filters</button>
            </div>
          </div>
      </div>

      <div className='mainFeed'>        
        <header className='main-header'>
          <h1 className='job-listing-title'>Job Feed</h1>
          <div className='right-div-search-profile'>
            <div className='search-div'>
              <div className='search-div-collection'>
                <AiOutlineSearch className='search-icon'/>
                <input type="text" className='input-search' placeholder='Search'/>
              </div>
            </div>
            <Link to = {`/me/${Auth.getProfile().data._id}`}> <img className="proflie-pic-corner" src={profile17}/> </Link>
          </div>
        </header>

        <div className='job-grid-box'>
          {postings.map((posting) => (
            <Link to= {`/posting/${posting._id}`} className="feed-post-link" style={{textDecoration: 'none'}}>
                <div className='job-box' key={posting.title}>
                  <h1 className='job-price'><span>$</span>{posting.cost}</h1>
                  <img className='job-post-img' src={posting.image} alt={posting.title}/>
                  <div className='job-post-decription-box'>
                    <div className='job-post-description-top'>
                      <h1 className='job-title'>{posting.title}</h1>
                      <div className='status-box'>
                        <h1 className='status-main-post'>Status</h1>
                        <span>
                          <img className='status-symbol-main' src={active}/>
                        </span>
                      </div>
                    </div>
                    <div className='job-post-description-bottom'>
                    <Link to= {`/user/${posting.owner._id}`} style={{textDecoration: 'none'}}><h1 className='job-post-owner'>{posting.owner.name}</h1></Link>
                      <h1 className='job-post-date'>{posting.createdAt}</h1>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>


      </div>


    </div>
    )
    ) : (
      <Navigate to="/"/>
    )
  )
}

export default HomeFeed;