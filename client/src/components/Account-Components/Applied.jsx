import React from "react";
import "../../styles/Applied.css";

function Applied() {

    return (
        <div id="appliedContainer">
            <div id="appliedHeader" className="flex">
                <h1 id="appliedHeaderAccountItem">Applied</h1>
                <h1 id="appliedHeaderHomeItem">Home</h1>
            </div>
            <div id="appliedCardContainer" className="flex">
                <div className="appliedCard flex">
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

export default Applied;