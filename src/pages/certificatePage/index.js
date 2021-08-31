import React, { useState } from 'react'
import Certificate from '../../component/certificate/Certificate'
import WalletAdapter from '../../component/wallet/WalletAdapter'

const CertificatePage = () => {
    const [Data, setData] = useState("")

    const sendDataToParent = (recievedData) => { // the callback. Use a better name
        setData(recievedData);
    };

    console.log(Data); // checking
    return (
        <div>
            <WalletAdapter />
            <Certificate sendDataToParent={sendDataToParent} />
        </div>
    )
}

export default CertificatePage
