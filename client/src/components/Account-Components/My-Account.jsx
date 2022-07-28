import React from "react";
import "../../styles/AccountStyles/My-Account.css";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';

function MyAccount() {

    const {loading, data} = useQuery(GET_ME);
    const mine = data?.GetMe || [];

    return (
        <div className="my-account-body">
            <div className="profile-signout"></div>
        </div>
    );
}

export default MyAccount;

/*
            <div id="myAccountHeader" className="flex">
                <h1 id="myAccountHeaderAccountItem">My Account</h1>
                <h1 id="myAccountHeaderHomeItem">Home</h1>
            </div>
            <div id="myAccountInfo" className="flex">
                <div id="myAccountInfoLeftColumn" className="flex">
                    <img alt="Profile Picture" src="https://via.placeholder.com/175"/>
                    <h3 id="myAccountSignOutButton">Signout</h3>
                </div>
                <div id="myAccountInfoRightColumn" className="flex">
                    <h3>Name:</h3>
                    <h3>{mine.name} {mine._id}</h3>
                    <h3>Email:</h3>
                    <h3>Display Email Here</h3>
                    <h3>Password:</h3>
                    <h3>Display Password Here</h3>
                    <h3>Rating:</h3>
                    <h3>Display Rating Here</h3>
                </div>
            </div> 
*/