import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_POSTING, GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/HomeFeedStyles/navbar.css';
import '../styles/HomeFeedStyles/feedBody.css';

import profilepic from '../img/Profile-pic.png';
import active from '../img/status/active.png';
import logo from '../img/logo.png';

import Auth from '../utils/auth';



function HomeFeed() {

  const {loading, data } = useQuery(GET_POSTING);
  const postings = data?.posting || [];

  console.log(postings)

  return (
    <div className="feedBody">
      <div className="sidebar">
          <div className="sidebar-top">
              <img className="navbar-logo" src={logo}/> 
              <span>OddJobs</span>
          </div>

          <div className='sidebar-bottom'>
            <h1 className='price-range'>Price Range</h1>
            <div className='range-box'>
              <input className='range-start'type="number" placeholder='10'/>
              <input className='range-start'type="number" placeholder='90'/>
            </div>
            <hr className='sidebar-line'/>


          </div>


      </div>

    <div className='mainFeed'>
        
        <header className='main-header'>
          <h1 className='job-listing-title'>All Job Listings</h1>
          <div className='right-div-search-profile'>
            <div className='search-div'>
              <div className='search-div-collection'>
                <AiOutlineSearch className='search-icon'/>
                <input type="text" className='input-search' placeholder='Search'/>
              </div>
            </div>
            <Link to = {`/me/${Auth.getProfile().data._id}`}> <img className="proflie-pic-corner" src={profilepic}/> </Link>
          </div>
        </header>

        <div className='job-grid-box'>
          {postings.map((posting) => (
            <Link to= {`/posting/${posting._id}`} className="feed-post-link">
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
                    <Link to= {`/`}><h1 className='job-post-owner'>Chris</h1></Link>
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
}

//user/${posting.owner._id}
//posting.owner.name


export default HomeFeed;