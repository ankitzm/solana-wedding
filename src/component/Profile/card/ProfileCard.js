import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ Picture, Name, About, GitHub, LinkedIn }) => {
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
            <div>
              <a href={GitHub} target="_blank">
                <img
                  alt="Qries"
                  src="https://miro.medium.com/max/640/1*75jvBleoQfAZJc3sgTSPQA.jpeg"
                  //   width="150"
                  //   height="70"
                />
              </a>
              <br />
              <br />
              <a href={LinkedIn} target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
