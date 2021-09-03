import React from 'react'
import ProfileCard from './card/ProfileCard'
import "./Profile.css"

function Profile() {
    return (
        <div className="profile container">
            <div className="text"> Created By </div>
            <div className="profiles">
                <ProfileCard Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4" Name="Ankit Singh" About="Frontend Developer" />
                <ProfileCard Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4" Name="Ankit Singh" About="Frontend Developer" />
                <ProfileCard Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4" Name="Ankit Singh" About="Frontend Developer" />
                <ProfileCard Picture="https://media-exp1.licdn.com/dms/image/C4E03AQE65SLDzmO-zQ/profile-displayphoto-shrink_400_400/0/1628513980585?e=1635984000&v=beta&t=4nbVo87mPKCtgdWBvIODpxvrCjpcMO3YRC0uxoTFUx4" Name="Ankit Singh" About="Frontend Developer" />
            </div>
        </div>
    )
}

export default Profile
