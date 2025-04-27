function main() {
    try {
        if ($response.code == "899" || $response.responseCode == "899") {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "102";
            errorMsg['responseMessage'] = "Plugin request execution timeout";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "d9cd080";
        } else if ($response.responseCode == "0" || $response.code == "0") {
            //console.log("================"+JSON.stringify($response))
            //console.log("================"+JSON.stringify($response["soapenv:Envelope"]["soapenv:Body"]["sch:clientRequestResponse"]["env:EaiEnvelope"]["env:Payload"]["cbs:CBSInterface"]["cbs:Response"]))
            //["soapenv:Envelope"]["soapenv:Body"]["sch:clientRequestResponse"]["env:EaiEnvelope"]["env:Payload"]["cbs:CBSInterface"]["cbs:Response"]
            let successMsg = {};
            successMsg['responseCode'] = 'S200';
            successMsg['errorCode'] = '0';
            successMsg['responseMessage'] = $response["soapenv:Envelope"]["soapenv:Body"]["sch:clientRequestResponse"]["env:EaiEnvelope"]["env:Payload"]["cbs:CBSInterface"]["cbs:Response"];
            successMsg['transactionID'] = $txnId;
            setVariable('successMsg', successMsg);
            setResponseCode('S200');
            return "d9cd080";

        } else {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "103";
            errorMsg['responseMessage'] = "HTTP Request Failed";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "d9cd080";

        }
    } catch (err) {
        logger.error("AID:111729867626970 | MID: d034673 | MSISDN:" + $MSISDN + " " + err);
    }
    setResponseCode("E9000")
    return "d9cd080";
}



if (!((Number(date.getDay()) == 0) || (Number(date.getDay()) == 4) || (Number(date.getDay()) == 5) || (Number(date.getDay()) == 6)))