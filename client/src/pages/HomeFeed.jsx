import React from 'react'
import { Navigate } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_POSTING, GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

import { AiOutlineSearch} from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import '../styles/HomeFeedStyles/navbar.css';
import '../styles/HomeFeedStyles/feedBody.css'
import active from '../img/status/active.png';


import logosvg from '../img/Logo.svg';
import profile1 from '../img/profiles/1.svg';
import Auth from '../utils/auth';
import { motion } from 'framer-motion';
import party from "party-js";





function HomeFeed() {

  const {loading, data } = useQuery(GET_POSTING);
  const postings = data?.posting || [];
  // const location = useLocation();

  console.log(postings)


  const fadeVariant = {
    hidden:{
      opacity: 0
    },
    visible:{
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  const headerVariant = {
    hidden:{
      y: -500
    },

    visible:{
      y: 0,
      transition: {
        duration: 0.8
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
        duration: 0.2
      }
    }

  }

  const logoVariant = {
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
      
    }
  }

  function sparkles (e) {
    party.sparkles(e.target, {
      count: party.variation.range(5, 5),
    });
  }


  return (
    (Auth.loggedIn()) ? (
    (loading) ? (
      <div>Loading...</div>
    ) : (       
      <div  className="feedBody">
        <motion.div variants={sidebarVariant} initial="hidden" animate="visible" className="sidebar">
            <div className="sidebar-top">
                <svg className="navbar-logo"  width="73" height="66" viewBox="0 0 73 66" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <button onClick={sparkles} className='filter-button'>Apply Filters</button>
              </div>
            </div>
        </motion.div>

        <div className='mainFeed'>        
          <motion.header variants={headerVariant} initial="hidden" animate="visible" className='main-header'>
            <h1 className='job-listing-title'>Job Feed</h1>
            <div className='right-div-search-profile'>
              <div className='search-div'>
                <div className='search-div-collection'>
                  <AiOutlineSearch className='search-icon'/>
                  <input type="text" className='input-search' placeholder='Search'/>
                </div>
              </div>
              <Link to = {`/me/${Auth.getProfile().data._id}`}> <img className="proflie-pic-corner" src={profile1}/> </Link>
            </div>
          </motion.header>

          <div className='job-grid-box'>
            {postings.map((posting) => (
              <Link to= {`/posting/${posting._id}`} className="feed-post-link" style={{textDecoration: 'none'}} key={posting._id}>
                  <motion.div className='job-box' >
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
                  </motion.div>
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