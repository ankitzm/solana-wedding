import React from 'react'
import "./Homepage.css"
import { LeftLeaf, RightLeaf, SolanaLogo } from "./../../assets/index"
import Explorer from '../explorer/Explorer'

function Homepage() {
    return (
        <div className="homepage">

            {/* landing */}
            <div className="home">
                <img src={LeftLeaf} alt="left-leaf" className="leaf" />
                <div className="heading">
                    <img className="solana-logo" src={SolanaLogo} alt="" /> <br />
                    WEDDING
                    <p className="sub-heading">we connects</p>
                </div>
                <img src={RightLeaf} alt="right-leaf" className="leaf" />
            </div>

            <Explorer />

            {/* certificate redirect card */}
            <div class="card">
                <div class="title">WEDDING REGISTRY</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia beatae explicabo cumque voluptatem
                    accusamus adipisci maxime unde voluptatibus. Dolorum aperiam illo delectus quisquam quod hic saepe.
                    Aliquam, ab impedit?</p>

                
            </div>

        </div>
    )
}

export default Homepage
