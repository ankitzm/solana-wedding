import React, { useState } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import CoreBTN from "../../core/btn/btn";
import "./Certificate.css";
import CertImg from "./../../assets/cert.jpg";
import moment from "moment";

const Certificate = ({ sendDataToParent }) => {
    const certificateWrapper = React.createRef();

    const [Husband, setHusband] = useState("");
    const [Wife, setWife] = useState("");
    const [Date, setDate] = useState("");

    const Data = {
        Husband: Husband,
        Wife: Wife,
        Date: Date,
    };
    let txid;

    //   Data.Date = moment(Data.Date).format("DD MMMM YYYY");

    return (
        <div>
            <div className="certificate-container">
                <div className="form">
                    <form id="form">
                        <input
                            type="text"
                            placeholder="Husband's Name"
                            value={Husband}
                            onChange={(e) => setHusband(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Wife's Name"
                            value={Wife}
                            onChange={(e) => setWife(e.target.value)}
                        />
                        <input
                            type="date"
                            value={Date}
                            onChange={(e) =>
                                setDate(e.target.value)
                            }
                        />
                        {/* {txid} */}
                        <CoreBTN
                            onClick={(e) => {
                                e.preventDefault();
                                sendDataToParent(Data);
                            }}
                            text="Confirm Data"
                            type="light"
                        />
                        <span className="sub-text">
                            {" "}
                            Click Send Transaction to complete your Transaction{" "}
                        </span>
                    </form>
                </div>

                <div className="download">
                    <div id="downloadWrapper" ref={certificateWrapper}>
                        <div id="certificateWrapper">
                            <p id="husband">{Husband}</p>
                            <p id="wife">{Wife}</p>
                            <script>txid = document.cookie;</script>
                            <p id="date">{Date === "" ? "" : moment(Date).format("DD MMMM YYYY")}</p>

                            {/* image is in ration 4:3 */}
                            <img id="cert-new" src={CertImg} alt="Certificate" />
                        </div>
                    </div>
                </div>
            </div>
            <CoreBTN
                onClick={(e) => {
                    if (document.cookie != null) {
                        txid = document.cookie;
                    }
                    console.log(txid);
                    e.preventDefault();
                    exportComponentAsJPEG(certificateWrapper, {
                        html2CanvasOptions: { backgroundColor: "#5e8fff" },
                    });
                }}
                type="light"
                text="download"
            />
        </div>
    );
};

export default Certificate;
