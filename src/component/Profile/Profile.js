import React from 'react';
import ProfileCard from './card/ProfileCard';
import './Profile.css';

function Profile() {
	return (
		<div className="profile container">
			<div className="text"> Our Beloved Team </div>
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
					Picture="https://avatars.githubusercontent.com/u/71444879?v=4"
					Name="Bhautik Poriya"
					About="UI/UX Designer"
				/>
				<ProfileCard
					Picture="https://avatars.githubusercontent.com/u/71517788?v=4"
					Name="Harsh Ghodkar"
					About="Blockchain Developer"
				/>
			</div>
		</div>
	);
}


export default Profile;
