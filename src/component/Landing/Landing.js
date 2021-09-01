import "./Landing.css"
import { LeftLeaf, RightLeaf, SolanaLogo } from "../../assets/index"

function Landing() {
    return (
        <div className="home">
            <img src={LeftLeaf} alt="left-leaf" className="leaf" data-aos="fade-left" />
            <div className="heading">
                <img className="solana-logo" src={SolanaLogo} alt="" /> <br />
                WEDDING
                <p className="sub-heading">we connects</p>
            </div>
            <img src={RightLeaf} alt="right-leaf" className="leaf" data-aos="fade-right"/>
        </div>
    )
}

export default Landing
