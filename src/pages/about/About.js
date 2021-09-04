import React from 'react'
import "./About.css"
import Website from "./../../assets/website.png"

function About() {
    return (
        <div className="about">
            <div className="heading-container">
                <div className="title">SOLANA SHADII</div>
                <dic className="sub-title">Solana Wedding Registry</dic>
            </div>
            <div className="content">
                The webapp has quite an intuitive user interface, but if this is the first time you are using a Dapp (Decentralized Application) we are here to help you out ! <br />

                <img id="website" src={Website} alt="homepage" /> <br />

                Dapps are made up on smartcontracts which are deployed on the blockchain, which means there is no central authority which is tracking your data or your activities, your privacy is important! The aim of our webapp is to provide a way to engrave your names into Solana Blockchain and provide a certificate regarding the same. <br />

                Steps one needs to follow to use it: <br />

                <ul>
                    <li>Go to the <a href="https://solanashadii.netlify.app/">Homepage</a>, click on the "Get your own certificate" button. </li>

                    <li>You will now be taken to a new page where you will be making the transaction. </li>

                    <li>Connect your wallet, currently only sollet wallets are directly integrated in the system as their UI is much better to use. </li>

                    <li>Once the wallet is connected, it will showcase the address of the connected wallet. </li>

                    <li>The site currently is pointed towards Devnet, thus you will require Devnet Solana coins to make the transaction, you can get them by requesting an airdrop. </li>

                    <li>Now fill up your details and click on "Confirm Data", you will be able to view the preview of the certificate as you type in the details. </li>

                    <li>You can add new data if you mistype it, just click on "Confirm Data" once you are totally sure about the details. </li>

                    <li>Once the data is confirmed, the transaction is ready to go, click on "Send Transaction". </li>

                    <li>A new pop-up will appear which will ask for your approval of the transaction which will also tell the fees it will take for the transaction. Solana offers a cheap transaction fee and we have also taken extra steps to minimise it as much as we can. </li>

                    <li>After approval, you will get the transacation id which is confirmed and now your names are there in the blockchain. </li>

                    <li>You can verify the transaction yourself, just copy the transaction id and search it on any solana explorer, make sure to check it on devnet, as currently the website is on devnet. </li>

                    <li>Transaction ids also get stored in your wallet's history. </li>

                    <li>You can now showoff your wedding certificate now on different social medias. </li>

                    <li>Any certificate can be regenerated through our explorer on the Homepage if you input the transaction id. </li>
                </ul>

<br />
                <div className="end-text">Congratulations on getting your names engraved on blockchain !!</div>
            </div>
        </div>
    )
}

export default About
