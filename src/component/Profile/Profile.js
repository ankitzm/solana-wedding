import React from "react";
import ProfileCard from "./card/ProfileCard";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile container">
      <div className="text"> Created By </div>
      <div className="profiles">
        <ProfileCard
          Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4"
          Name="Ankit Singh"
          About="Frontend Developer"
        />
        <ProfileCard
          Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4"
          Name="Avish Mehta"
          About="Backend Developer"
        />
        <ProfileCard
          Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4"
          Name="Bhautik Poriya"
          About="UI/UX Designer"
        />
        <ProfileCard
          Picture="https://media-exp1.licdn.com/dms/image/C4E03AQGcBYfmeTJmJw/profile-displayphoto-shrink_200_200/0/1621244919839?e=1635984000&v=beta&t=k2jSCzOn_z3r32ZI1ZL0ruqrBaYWMGnMkC9Da43iNyE"
          Name="Harsh Ghodkar"
          About="Blockchain Developer"
        />
      </div>
    </div>
  );
}

export default Profile;
