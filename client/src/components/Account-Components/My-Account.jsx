import React from "react";
import "../../styles/My-Account.css";

function MyAccount() {

    return (
        <div id="myAccountContainer">
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
                    <h3>Display Name Here</h3>
                    <h3>Email:</h3>
                    <h3>Display Email Here</h3>
                    <h3>Password:</h3>
                    <h3>Display Password Here</h3>
                    <h3>Rating:</h3>
                    <h3>Display Rating Here</h3>
                </div>
            </div>
        </div>
    );
}

export default MyAccount