import React from "react";
import "../../styles/Applications.css";

function Applications() {

    return (
        <div id="applicationsContainer">
            <div id="applicationsHeader" className="flex">
                <h1 id="applicationsHeaderApplicationsItem">Applications</h1>
                <h1 id="applicationsHeaderHomeItem">Home</h1>
            </div>
            <div id="applicationsReceivedContainer" className="flex">
                <div className="applicationsCard flex">
                    <h3>Role & Status Placeholder</h3>
                    <div>
                        <h3>Applicat's Name Placeholder</h3>
                        <h3>Applicant's Rating Placeholder</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;