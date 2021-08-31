import React from 'react'
import Card from '../../component/card/Card';
import Explorer from '../../component/explorer/Explorer'
import Landing from '../../component/Landing/Landing';


function Home() {
    return (
        <div>
            <Landing />
            <Explorer />
            <Card />
        </div>
    )
}

export default Home;