// headers were common in both api calls
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function Get(form) {

    // change text when button is clicked
    document.getElementById("temp").innerHTML = "Searching ...";

    // get signature from address
    var raw = JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getSignaturesForAddress",
        "params": [
            form,
            {
                "limit": 1
            }
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
        .then(result => {
            var signature = result.result[0].signature;

            // console.log(signature);                               check
            GetData(signature)
        })
        .catch(error => console.log('error', error));

}

// signature -->  extract important data (husband name, wife name, data)
function GetData(signature) {
    var raw = JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getTransaction",
        params: [signature, "json"],
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("https://api.devnet.solana.com/", requestOptions)
        .then((response) => response.json())
        .then(data => {
            var main = data.result.meta.logMessages[2];

            // remove unnessasary text and trimmed important data to JSON
            var mainJSON = JSON.parse(main.substring(main.indexOf("{"), main.indexOf("}") + 1));
            // console.log(mainJSON);                       check


            document.getElementById("husband").innerText = mainJSON.husband;
            document.getElementById("wife").innerText = mainJSON.wife;
            document.getElementById("date").innerText = mainJSON.date;

            // removing text in div having id "temp"
            document.getElementById("temp").style.display = "none";

        })
        .catch((error) => console.log("error", error));
}

export default Get