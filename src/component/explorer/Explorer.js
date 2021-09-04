import React, { useState } from 'react'
import { exportComponentAsJPEG } from "react-component-export-image";
import { Link } from 'react-router-dom';
import "./Explorer.css"
import Get from './callAPI'
import CoreBTN from '../../core/btn/btn'
import CertImg from './../../assets/cert.jpg'

function Explorer() {
    const certificateWrapper = React.createRef();
    const [search, setSearch] = useState('')
    const [QRurl, setQRurl] = useState("")
    return (
        <div className="explorer">
            <input type="text" onChange={e => setSearch(e.target.value.trim())} placeholder="Transaction ID" />
            <CoreBTN
                id="toggle"
                onClick={e => {
                    Get(search);
                    setQRurl(search);
                }}
                text="Get Data"
                type="dark"
            />

            <Link to="/certificate">
                <CoreBTN text="Get your own Certificate" id="cert-page" type="dark" />
            </Link>


            <div id="temp">
                Search your transaction ID above
            </div>

            <div className="cert-container">
                <div id="downloadWrapper-exp" ref={certificateWrapper}>
                    <div id="certificateWrapper-exp">
                        <p id="husband"></p>
                        <p id="wife"></p>
                        <p id="date"></p>
                        <p id="QR"><img id="QR-img" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRurl}`} alt=""/> </p>

                        {/* image is in ratio 4:3 */}
                        <img id="cert-image" src={CertImg} alt="Certificate" />
                    </div>
                </div>

                <CoreBTN
                    onClick={(e) => {
                        e.preventDefault();
                        exportComponentAsJPEG(certificateWrapper, {
                            html2CanvasOptions: { backgroundColor: null },
                        });
                    }}
                    type="light"
                    text="download"
                />
            </div>
        </div >
    )
}

export default Explorer
