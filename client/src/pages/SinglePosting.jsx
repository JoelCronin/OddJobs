import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_SINGLE_POSTING} from '../utils/queries';
import '../styles/single-post.css';
import logosvg from '../img/Logo.svg'
import active from '../img/status/active.png';
import profile65 from '../img/profiles/1.svg';
import StarRating from '../components/StarRating';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { Navigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { APPLY_FOR_JOB } from '../utils/mutations';
import { REMOVE_APPLICATION } from '../utils/mutations';
import IMAGES from '../img/profiles/index.js';


import Auth from "../utils/auth";


function SinglePosting() {

 

  

// Global variables
  var apiKey = "95hcXeOsnd4dIFUnbepjXbFxyLKnwAAA";
  var cityLat;
  var cityLong;
  var coordinates = [];
  var here = [];
  var centre = [];

//Fetch Request to get longs and lats of job Postcode
var userLocation = async function(cityName){
    await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${cityName}`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        cityLat = data.results[0].locations[0].latLng.lat;
        cityLong = data.results[0].locations[0].latLng.lng;
        console.log(cityLat);
        console.log(cityLong);
        console.log(data);
        //Push longs and lats into one Array as this is the format required by leaflet
        coordinates.push(cityLat, cityLong)
        console.log(coordinates);
        //Send to local storage
        localStorage.setItem('coords', JSON.stringify(coordinates))

    })
};

//Retrieve co-ords from local storage 
here = JSON.parse(localStorage.getItem('coords'))

// Our map displays as a rectangle rather than a square so was centering wrong on the map.
//This logic takes away 0.4 from the latitude so that it the map centres on the pin



// Calls the Single Posting Query
 
// Saves URI into a variable to use for searches
const singlePostingId = useParams();

// Gets single posting using Id
const {loading, data} = useQuery (GET_SINGLE_POSTING, {
    variables: singlePostingId 
})

const singlepost = data?.singlePosting || [];
// console.log (singlepost)

const owner = data?.singlePosting?.owner || [];
console.log(owner)
const jobSite = owner.postCode
console.log(jobSite)
//Calls API with postcode got from singleposting Query
userLocation(jobSite)

var latitude = here[0];
// console.log(latitude)
var latSouth = latitude - 0.4
// console.log(latSouth)
// console.log(here)
centre.push(latSouth, here[1])
console.log(centre)


const userIcon = IMAGES[owner.image];
console.log(userIcon)

// Apply for Position Functionallity to show/hide apply button
const [hasApplied, setHasApplied] = useState(false);
const ID = Auth.getProfile().data._id;

if(data) {
  singlepost.applications.map((input) => {
    if(input._id === ID) {
      if(hasApplied === false) {
        setHasApplied(true)
      }
    }
  })
}
    
    

    const leftVariant = {
      hidden:{
        x: -400
      },
      visible:{
          x: 0,
          transition: {
              duration: 0.4
          }
      }
    }
    const rightVariant = {
      hidden:{
        x: 400
      },
      visible:{
          x: 0,
          transition: {
              duration: 0.4
          }
        }
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
    (Auth.loggedIn()) ? (
      (loading) ? (
        <div>Loading...</div>
      ) : (  
    <div className='header-and-post-container'>
      <header className="admin-main-header">
        <div className="sidebar-top">
              <img className="navbar-logo" src={logosvg} alt=""/>
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
          <motion.div variants={leftVariant} initial="hidden" animate="visible" className='left-job-post-container'>
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
                          <img className='status-symbol-main' src={active} alt=""/>
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
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" animate="visible" className='right-job-post-container'>
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
              <div type="text" className="jop-appication-location">             
               <MapContainer center={centre} zoom={10}scrollWheelZoom={true}>
                  <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={here}></Marker>
                </MapContainer>
                </div>

 
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
  ) : (
    <Navigate to="/"/>
  )
  )

}

export default SinglePosting;