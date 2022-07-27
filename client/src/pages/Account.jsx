import React from "react";
import "../styles/Account.css"

import AccountNav from "../components/Account-Components/Account-Nav"
import MyAccount from "../components/Account-Components/My-Account"
import MyListings from "../components/Account-Components/My-Listings";
import Applied from "../components/Account-Components/Applied";
import Applications from "../components/Account-Components/Applications"

function Account() {

    return (
        <div id="accountPage" className="flex">
            <AccountNav />
            <MyAccount />
        </div>
    );
}

export default Account