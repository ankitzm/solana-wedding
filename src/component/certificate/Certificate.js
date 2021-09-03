import React, { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import CoreBTN from "../../core/btn/btn";
import "./Certificate.css";
import CertImg from "./../../assets/cert.png";
import * as moment from "moment";

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
                                setDate(moment(e.target.value).format("DD MMMM YYYY"))
                            }
                        />

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

                <div id="downloadWrapper" ref={certificateWrapper}>
                    <div id="certificateWrapper">
                        <p id="husband">{Husband}</p>
                        <p id="wife">{Wife}</p>
                        <p id="date">{Date}</p>

                        {/* image is in ration 4:3 */}
                        <img src={CertImg} alt="Certificate" />
                    </div>
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
    );
};

export default Certificate;
