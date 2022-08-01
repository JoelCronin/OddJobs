import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {GET_SINGLE_POSTING} from '../utils/queries';
import '../styles/single-post.css';
import logosvg from '../img/Logo.svg'
import active from '../img/status/active.png';
import profile65 from '../img/profiles/profile65.svg';
import StarRating from '../components/StarRating';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import Auth from "../utils/auth";
import { MdKeyboardReturn } from 'react-icons/md';

function SinglePosting() {

  
// Global variables
var apiKey = "95hcXeOsnd4dIFUnbepjXbFxyLKnwAAA";
var cityLat;
var cityLong;
var coordinates = [];
var here = [];
var centre = [];

//Fetch Request to get longs and lats of job Postcode
var userLocation = function(cityName){
    fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${cityName}`)
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
var latitude = here[0];
console.log(latitude)
var latSouth = latitude - 0.4
console.log(latSouth)
console.log(here)
centre.push(latSouth, here[1])
console.log(centre)

const owner = data?.singlePosting?.owner || [];
const jobSite = owner.postCode
console.log(jobSite)
//Calls API with postcode got from singleposting Query
userLocation(jobSite)

// Calls the Single Posting Query
const singlePostingId = useParams();

const {loading, data} = useQuery (GET_SINGLE_POSTING, {
    variables: singlePostingId 
})

const singlepost = data?.singlePosting || [];
console.log (singlepost)

    


// Apply for Position Functionallity to show/hide apply button
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
              {hasApplied ? (
              <button className='job-post-apply-button'>Already Applied</button>
              ) : (
              <button className='job-post-apply-button'>APPLY</button>
              )}
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
          </div>
        </div>
      </div>
    </div>
  )

}

export default SinglePosting;