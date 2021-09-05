import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ Picture, Name, About, Back_Side }) => {
  return (
    <div className="profile-card">
      <div className="card-container">
        <div class="card">
          <div class="card-side front">
            <img className="round" src={Picture} height="200px" alt="user" />
            <h3>{Name}</h3>
            <h6>India</h6>
            <h4>{About}</h4>
          </div>
          <div class="card-side back">
            <div>{Back_Side}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
