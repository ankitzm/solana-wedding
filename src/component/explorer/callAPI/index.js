import moment from "moment";

function Get(search) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTransaction",
        "params": [
            search,
            "json"
        ]
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.devnet.solana.com", requestOptions)
        .then(response => response.json())
        .then(data => {
            var main = data.result.meta.logMessages[4];

            // remove unnessasary text and trimmed important data to JSON
            var mainJSON = JSON.parse(main.substring(main.indexOf("{"), main.indexOf("}") + 1));
            // console.log("from index" + mainJSON);                      // check

            document.getElementById("husband").innerHTML = mainJSON.husband
            document.getElementById("wife").innerHTML = mainJSON.wife
            document.getElementById("date").innerHTML = moment(mainJSON.date).format("DD MMMM YYYY")

            // add QR code
            var img = document.createElement("img");
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${search}&bgcolor=00`;
            img.style.width = "80px"
            img.style.height = "80px"
            var src = document.getElementById("QR");
            src.appendChild(img);
        })
        .catch(error => console.log('error', error));
}

export default Get;

