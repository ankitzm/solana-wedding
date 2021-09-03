import React from 'react';
import ProfileCard from './card/ProfileCard';
import './Profile.css';

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
					Picture="https://media-exp1.licdn.com/dms/image/C4D03AQEH8quRVh57bg/profile-displayphoto-shrink_200_200/0/1623261924566?e=1635984000&v=beta&t=pZ5Gkt_SzSYbggQyez5hA2tjUbC0_pIs7dWpQkppA3A"
					Name="Avish Mehta"
					About="Backend Developer"
				/>
				<ProfileCard
					Picture="https://media-exp1.licdn.com/dms/image/C4E03AQHCms51xt-iXQ/profile-displayphoto-shrink_100_100/0/1625233324895?e=1635984000&v=beta&t=mA-Syc-z6qtvqoIvO7G060tekp6jSE5p8Go4NamtU_8"
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
