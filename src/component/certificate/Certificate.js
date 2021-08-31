import React, { useState } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import "./Certificate.css"

const Certificate = ({sendDataToParent}) => {
    const certificateWrapper = React.createRef();

    const [Husband, setHusband] = useState("")
    const [Wife, setWife] = useState("")
    const [Date, setDate] = useState("")

    const Data = {
        Husband: { Husband },
        Wife: { Wife },
        Date: { Date }
    }

    return (
        <div className="certificate-container">

            <div className="form-container">
                <div className="form">

                    <form id="form" onSubmit="return false;">
                        <input
                            type="text"
                            placeholder="Husband's Name"
                            value={Husband}
                            onChange={(e) =>
                                setHusband(e.target.value)
                            }
                        />
                        <input
                            type="text"
                            placeholder="Wife's Name"
                            value={Wife}
                            onChange={(e) =>
                                setWife(e.target.value)
                            }
                        />
                        <input
                            type="date"
                            value={Date}
                            onChange={(e) =>
                                setDate(e.target.value)
                            }
                        />

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                sendDataToParent(Data)
                            }}
                        >
                            send data for transaction
                        </button>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                exportComponentAsJPEG(this.certificateWrapper, {
                                    html2CanvasOptions: { backgroundColor: null }
                                });
                            }}
                        >
                            Download
                        </button>

                    </form>
                </div>


                <div id="downloadWrapper" ref={certificateWrapper}>
                    <div id="certificateWrapper">
                        <p>{Husband}</p>

                        {/* image is in ration 4:3 */}
                        <img src="https://ankitzm.co/template/template3.jpg" alt="Certificate" />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Certificate;