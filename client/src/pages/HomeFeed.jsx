import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_POSTING, GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import '../styles/HomeFeedStyles/navbar.css';
import '../styles/HomeFeedStyles/feedBody.css';

// import profilepic from '../img/Profile-pic.png';
import active from '../img/status/active.png';
// import logo from '../img/logo.png';
import logosvg from '../img/Logo.svg';
// import profile17 from '../img/profiles/profile17.svg'
import IMAGES from '../img/profiles/index.js';

import Auth from '../utils/auth';

function HomeFeed() {

  const [minPrice, setMinPrice] = useState('10');
  const [maxPrice, setMaxPrice] = useState('20');
  const [activeStatus, setActiveStatus] = useState(true);
  const [pendingStatus, setPendingStatus] = useState(true);
  const [completedStatus, setCompletedStatus] = useState(true);

  const [searchInput, setSearchInput] = useState('')

  const filteredPostings = [];
  const reFilteredPostings =[];
  const searchFilterPostings =[];

  const handleChange = (event) => {
    const { target } = event;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === 'minPrice') {
      setMinPrice(inputValue);
    } else if (inputType === 'maxPrice') {
      setMaxPrice(inputValue);
    }
  }

  const handleStatusChange = (event) => {
    const { target } = event;
    const inputType = target.id;

    if (inputType === 'activeButton') {
      setActiveStatus(!activeStatus);
      console.log("Active Status "+ activeStatus)
    } else if (inputType === 'pendingButton') {
      setPendingStatus(!pendingStatus);
      console.log("Pending Status " + pendingStatus)
    } else if (inputType === 'completedButton') {
      setCompletedStatus(!completedStatus);
      console.log("Completed Status " + completedStatus)
    }
  }

  const handleSearchChange = (event) => {
    const { target } = event;
    const inputValue = target.value;
    setSearchInput(inputValue);
  }

  const handleSubmit = (event) => {

    console.log('Before');
    console.log(reFilteredPostings);

    if(!((activeStatus === false) && (pendingStatus === false) && (completedStatus === false))) {

    postings.map((posting) => {
      if((minPrice <= posting.cost) && (posting.cost <= maxPrice)){
        filteredPostings.push(posting);
      }
    })

    if(activeStatus === true) {
      filteredPostings.map((posting) => {
        if(posting.status === "Active") {
          reFilteredPostings.push(posting);
        }
      })
    }

    if(pendingStatus === true) {
      filteredPostings.map((posting) => {
        if(posting.status === "Pending") {
          reFilteredPostings.push(posting);
        }
      })
    }

    if(completedStatus === true) {
      filteredPostings.map((posting) => {
        if(posting.status === "Completed") {
          reFilteredPostings.push(posting);
          console.log('Test')
        }
      })

    } 
      // console.log('After');
      // console.log(reFilteredPostings);
    

    const splitInput = searchInput.toUpperCase().split("");

    reFilteredPostings.map((posting) => {
      var splitOwner = posting.title.toUpperCase().split("");
        for(var i=0; i < (splitInput.length + 1); i++){

          if (splitInput.length === i){
            searchFilterPostings.push(posting);
          }

          else if(splitInput[i] !== splitOwner[i]){
            break;

          }
        }
    })

    setSubmitPostings(searchFilterPostings);

  } else {
  console.log('After');
  setSubmitPostings([]);
  }

  console.log(submitPostings);

}

  const {loading, data } = useQuery(GET_POSTING);
  const postings = data?.posting || [];

  const [submitPostings, setSubmitPostings] = useState([]);

  if((postings.length > 0) && (submitPostings.length == 0) && (postings.length != 0)) {
    setSubmitPostings(postings);
  }

  const { data: meData } = useQuery(GET_ME);
  const me = meData?.me || [];
  const userIcon = IMAGES[me.image];
  
  return (
    (Auth.loggedIn()) ? (
    (loading) ? (
      <div>Loading...</div>
    ) : (       
    <div className="feedBody">
      <div className="sidebar">
          <div className="sidebar-top">
              <img className="navbar-logo" src={logosvg} alt= ""/>
              <span>OddJobs</span>
          </div>
          <div className='sidebar-bottom'>
            <h1 className='price-range'>Price Range</h1>
            <div className='range-box'>
              <input className='range-start'
                     id='minPrice' 
                     type="number" 
                     placeholder='10'
                     value={minPrice}
                     onChange={handleChange}/>
              <input className='range-start'
                     id='maxPrice'
                     type="number" 
                     placeholder='90'
                     value={maxPrice}
                     onChange={handleChange}/>
            </div>
            <hr className='sidebar-line'/>
            <h1 className='dollar-sign-one'>$</h1>
            <h1 className='dollar-sign-two'>$</h1>
            <div className='stats-cluster'>
              <div className='status-filter-container'>
                <h1 className='status-filter-title'>Status</h1>
                <div className='active-container'>
                  <BsFillCheckCircleFill 
                    className={activeStatus == true ? 'status-checkmark-active' : 'not-true'}
                    id='activeButton'
                    onClick={handleStatusChange}/>
                  <h1 className='active-check-name'>Active</h1>
                </div>
              </div>
              <div className='status-filter-container'>
                <div className='active-container'>
                  <BsFillCheckCircleFill 
                  className={pendingStatus == true ? 'status-checkmark-pending' : 'not-true'}
                  id='pendingButton'
                  onClick={handleStatusChange}/>
                  <h1 className='active-check-name'>Pending</h1>
                </div>
              </div>
              <div className='status-filter-container'>
                <div className='active-container'>
                  <BsFillCheckCircleFill 
                  className={completedStatus == true ? 'status-checkmark-completed' : 'not-true'}
                  id='completedButton'
                  onClick={handleStatusChange}/>
                  <h1 className='active-check-name'>Completed</h1>
                </div>
              </div>
            </div>
            <div className='filter-button-container'>
              <button className='filter-button' onClick={handleSubmit}>Apply Filters</button>
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
                <input type="text" 
                       className='input-search' 
                       placeholder='Search'
                       value={searchInput}
                       onChange={handleSearchChange}
                       />
              </div>
            </div>
            <Link to = {`/me/${Auth.getProfile().data._id}`}> <img className="proflie-pic-corner" src={ userIcon } alt="icon" /> </Link>
          </div>
        </header>

        <div className='job-grid-box'>
          {submitPostings.length != 0 ? (
            <>
            {submitPostings.map((posting) => (
              <Link to= {`/posting/${posting._id}`} className="feed-post-link" style={{textDecoration: 'none'}} key={posting._id}>
                  <div className='job-box' >
                    <h1 className='job-price'><span>$</span>{posting.cost}</h1>
                    <img className='job-post-img' src={posting.image} alt={posting.title}/>
                    <div className='job-post-decription-box'>
                      <div className='job-post-description-top'>
                        <h1 className='job-title'>{posting.title}</h1>
                        <div className='status-box'>
                          <h1 className='status-main-post'>Status</h1>
                          <span>
                            <img className='status-symbol-main' src={active} alt= ""/>
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
            </>
          ) : (
            <div></div>
          )}
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