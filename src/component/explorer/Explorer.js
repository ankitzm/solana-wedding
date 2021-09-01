import { React, useState } from 'react'
import "./Explorer.css"
import Get from './callAPI'
import CoreBTN from '../../core/btn/btn'

function Explorer() {
    const [search, setSearch] = useState('')
    const [mainJSON, setMainJSON] = useState(null)

    return (
        <div className="explorer">
            <input type="text" onChange={e => e.target.value !== '' ? setSearch(e.target.value) : "disabled"} placeholder="Transaction ID" />
            <CoreBTN
                id="toggle"
                onClick={e => (
                    setMainJSON(Get(search))
                )}
                text="Get Data"
                type="dark"
            />

            {/* terenary operator */}
            {mainJSON === null ?
                <div id="temp">
                    Search your transaction ID above
                </div>
                :
                <div id="recieved-data" className="recieved">
                    <div className="cert-pdf">
                        {mainJSON}
                        <embed src="http://ankitzm.co/template/template3.jpg" type="application/pdf" frameBorder="0"
                            scrolling="none" height="100%" width="100%"></embed>
                    </div>
                </div>
            }
        </div >
    )
}

export default Explorer
