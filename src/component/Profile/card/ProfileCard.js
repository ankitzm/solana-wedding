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
									src="https://miro.medium.com/max/640/1*75jvBleoQfAZJc3sgTSPQA.jpeg"
									height="50px"
									width="50px"
								/>
							</a>
							<br />
							<br />
							<a href={LinkedIn} target="_blank">
								LinkedIn
								<img
									alt="LinkedIn"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Pxv4t5SEZXjQRx4f_hBVi_wM_Wni9fqydQ&usqp=CAU"
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
