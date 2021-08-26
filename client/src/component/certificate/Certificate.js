import React, { Component } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import "./Certificate.css"

class Certificate extends Component {
    certificateWrapper = React.createRef();
    state = {
        Husband: "",
        Wife: "",
        Date: ""
    };
    render() {
        return (
            <div className="certificate-container">

                <div className="form-container">
                    <div className="form">
                        
                        <form id="form" onsubmit="return false;">
                            <input
                                type="text"
                                placeholder="Husband's Name"
                                value={this.state.Husband}
                                onChange={(e) => {
                                    this.setState({ Husband: e.target.value });
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Wife's Name"
                                value={this.state.Wife}
                                onChange={(e) => {
                                    this.setState({ Wife: e.target.value })
                                }}
                            />
                            <input
                                type="date"
                                value={this.state.Date}
                                onChange={(e) => {
                                    this.setState({ Date: e.target.value })
                                }}
                            />

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


                    <div id="downloadWrapper" ref={this.certificateWrapper}>
                        <div id="certificateWrapper">
                            <p>{this.state.Husband}</p>

                            {/* image is in ration 4:3 */}
                            <img src="https://ankitzm.co/template/template3.jpg" alt="Certificate" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificate;