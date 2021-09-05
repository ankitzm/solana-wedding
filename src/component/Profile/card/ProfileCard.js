import React from 'react';
import './ProfileCard.css';

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
									alt="GitHub"
									src="https://user-images.githubusercontent.com/69706506/132130484-030f3025-e95c-4ff5-bb6f-2ee617db2bfa.gif"
									height="50px"
									width="50px"
								/>
							</a>
							<br />
							<br />
							<a href={LinkedIn} target="_blank">
								<img
									alt="LinkedIn"
									src="https://user-images.githubusercontent.com/69706506/132130473-81568b64-9a40-4fe2-b5d7-6863bfab59f4.gif"
									height="50px"
									width="50px"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProfileCard;
