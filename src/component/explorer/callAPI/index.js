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

            return mainJSON;
        })
        .catch(error => console.log('error', error));

}

export default Get;

