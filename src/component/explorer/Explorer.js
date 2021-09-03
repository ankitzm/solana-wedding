import React, { useState } from 'react'
import { exportComponentAsPNG } from "react-component-export-image";
import { Link } from 'react-router-dom';
import "./Explorer.css"
import Get from './callAPI'
import CoreBTN from '../../core/btn/btn'
import CertImg from './../../assets/cert.png'

function Explorer() {
    const certificateWrapper = React.createRef();
    const [search, setSearch] = useState('')

    return (
        <div className="explorer">
            <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Transaction ID" />
            <CoreBTN
                id="toggle"
                onClick={e => Get(search)}
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
                <div id="downloadWrapper" ref={certificateWrapper}>
                    <div id="certificateWrapper">
                        <p id="husband"></p>
                        <p id="wife"></p>
                        <p id="date"></p>
                        <p><img id="QR" alt="" /></p>

                        {/* image is in ratio 4:3 */}
                        <img src={CertImg} alt="Certificate" />
                    </div>
                </div>

                <CoreBTN
                    onClick={(e) => {
                        e.preventDefault();
                        exportComponentAsPNG(certificateWrapper, {
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
