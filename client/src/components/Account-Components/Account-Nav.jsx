import React from "react";
import "../../styles/Account-Nav.css";

function AccountNav() {

    return (
        <div id="accountNav">
            <h1>Admin</h1>
                <h2 className="accountNavItem">My Account</h2>
                <h2 className="accountNavItem">My Listings</h2>
                <h2 className="accountNavItem">Applications Received</h2>

        </div>
    );
}

export default AccountNav