import React from "react";
import "../styles/Account.css"

import AccountNav from "../components/Account-Nav"
import MyAccount from "../components/My-Account"

function Account() {

    return (
        <div id="accountPage" className="flex">
            <AccountNav />
            <MyAccount />
        </div>
    );
}

export default Account