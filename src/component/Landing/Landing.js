import { Link } from 'react-router-dom';
import './Landing.css';
import { LeftLeaf, RightLeaf, SolanaLogo } from '../../assets/index';
import CoreBTN from '../../core/btn/btn';

function Landing() {
	return (
		<div className="home">
			<Link to="/about">
				<CoreBTN text="About" type="light" id="about-btn" />
			</Link>

			<img src={LeftLeaf} alt="left-leaf" className="leaf" data-aos="fade-left" />
			<div className="heading">
				<img className="solana-logo" src={SolanaLogo} alt="" /> <br />
				SHADI
				<p className="sub-heading">Save Your Wedding Forever</p>
			</div>
			<img
				src={RightLeaf}
				alt="right-leaf"
				className="leaf"
				data-aos="fade-right"
			/>
		</div>
	);
}

export default Landing;
