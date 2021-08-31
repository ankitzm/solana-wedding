import "./Landing.css"
import { LeftLeaf, RightLeaf, SolanaLogo } from "../../assets/index"

function Landing() {
    return (
            <div className="home">
                <img src={LeftLeaf} alt="left-leaf" className="leaf" />
                <div className="heading">
                    <img className="solana-logo" src={SolanaLogo} alt="" /> <br />
                    WEDDING
                    <p className="sub-heading">we connects</p>
                </div>
                <img src={RightLeaf} alt="right-leaf" className="leaf" />
            </div>
    )
}

export default Landing
