import { React, useState } from 'react'
import "./Explorer.css"
import Get from './callAPI'
import CoreBTN from '../../core/btn/btn'

function Explorer() {
    const [title, setTitle] = useState('')

    return (
        <div className="explorer">
            <input type="text" onChange={event => setTitle(event.target.value)} placeholder="Transaction ID" />
            <CoreBTN
                id="toggle"
                onClick={e => (
                    Get(title)
                )}
                text="Get Data"
                type="dark"
            />

            <div id="temp">
                Search your transaction ID above
            </div>

            {/* show recieved data */}
            <div id="recieved-data" className="recieved">

                <div className="formatted">
                    <strong>The Transaction ID has been verified !!</strong> <br /><br />
                    Husband Name &nbsp;:  <p id="husband"></p><br />
                    Wife Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  <p id="wife"></p><br />
                    Wedding Date &nbsp;&nbsp;&nbsp;:  <p id="date"></p> <br />
                </div>

                <div className="cert-pdf">
                    <embed src="http://ankitzm.co/template/template3.jpg" type="application/pdf" frameBorder="0"
                        scrolling="none" height="100%" width="100%"></embed>
                </div>
            </div>
        </div>
    )
}

export default Explorer
