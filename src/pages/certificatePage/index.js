import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Certificate from '../../component/certificate/Certificate'
import WalletAdapter from '../../component/wallet/WalletAdapter'
import "./style.css"

const CertificatePage = () => {
    const [Data, setData] = useState(null)

    const sendDataToParent = (recievedData) => { // the callback. Use a better name
        setData(recievedData);
    };

    console.log(Data); // checking
    return (
        <div>
            <Link className="home-btn" to="/">
            <img src="https://img.icons8.com/glyph-neue/38/262626/home.png" alt="home" />
            </Link>
            <WalletAdapter Data={Data} />
            <Certificate sendDataToParent={sendDataToParent} />
        </div>
    )
}

export default CertificatePage
