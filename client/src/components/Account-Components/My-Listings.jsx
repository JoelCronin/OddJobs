import React from "react";
import "../../styles/My-Listings.css";
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

            
            <div id="myListingsHeader" className="flex">
                <h1 id="myListingHeaderListingsItem">My Listings</h1>
                <h1 id="myListingHeaderHomeItem">Home</h1>
            </div>
            {myListings.activeJobs.length === 0 ? (<p>YOU DONT HAVE ANY JOBS</p>) : (
            <div id="myListingsCardContainer" className="flex">
                <div className="listingCard flex">
                    <h3>Cost Placeholder</h3>
                    <h3>Edit Button Placeholder</h3>
                    <img src="https://via.placeholder.com/200" alt="Job"/>
                    <h3>Desciption Placeholder</h3>
                    <h3>Status Placeholder</h3>
                    <h3>Name Placeholder</h3>
                    <h3>Date Placeholder</h3>
                </div>
            </div>
            )}
        </div>
    );
}

export default MyListings;  