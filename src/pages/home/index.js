import React from 'react'
import Explorer from '../../component/explorer/Explorer'
import Landing from '../../component/Landing/Landing';
import Profile from '../../component/Profile/Profile';


function Home() {
    return (
        <div>
            <Landing />
            <Explorer />
            <Profile />
        </div>
    )
}

export default Home;