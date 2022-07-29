import React from "react";
import "../../styles/My-Listings.css";

function MyListings() {

    return (
        <div id="myListingsContainer">
            <div id="myListingsHeader" className="flex">
                <h1 id="myListingHeaderListingsItem">My Listings</h1>
                <h1 id="myListingHeaderHomeItem">Home</h1>
            </div>
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
        </div>
    );
}

export default MyListings;