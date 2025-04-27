function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200",
            generalError['errorCode'] = "107",
            generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        setVariable('generalError', generalError);

        if ($MSISDN != null) {
            let noCCMSISDN = String($MSISDN).slice(3)
            //let  = noCCMSISDN.slice(3);
            setVariable('noCCMSISDN', result);
            let Exp1 = new RegExp("^24206[0-9]{7}$");
            let Exp2 = new RegExp("^06[0-9]{7}$");

            if (Exp1.test($MSISDN)) {
                setVariable('msisdn', $MSISDN);
                return "d034673";
            } else if (Exp2.test($MSISDN)) {
                setVariable('msisdn', '242' + $MSISDN);
                return "d034673";
            } else {
                let errorMsg = {};
                errorMsg['responseCode'] = 'E200';
                errorMsg['errorCode'] = "100";
                errorMsg['responseMessage'] = "Please enter a valid MSISDN";
                errorMsg['transactionID'] = $txnId;
                setVariable('errorMsg', errorMsg);
                setResponseCode('E200');
                return "d9cd080";
            }
        } else {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "100";
            errorMsg['responseMessage'] = "Please enter a valid MSISDN";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "d9cd080";
        }
    } catch (e) {
        console.log(e);
        setResponseCode('E9000');
        return "d9cd080";
    }
}




let effectiveDate = _date2customformat(_now(), 'yyyy-mm-dd\'T\'HH:mm:ss.000\'Z\'');
setVariable('effectiveDate', effectiveDate);

let text = 'REQUEST API_CODE="7001" ENTITY_ID="' + $custMSISDN + '" EXTERNAL_APPLICATION="admin" EXTERNAL_REFERENCE="" EXTERNAL_USER="admin" INFO_LEVEL="" CLIENT_ID="MTNG" OPERATION_NAME="simchange" EXTERNAL_SYSTEMS_LOG_REFERNCE="' + $txnId + '"';
setVariable('text', text);

let REQUESTDETAILS = 'REQUESTDETAILS REQUEST_TYPE="SIMC" COMMENTS="Sim Change Test" EFFECTIVE_FLAG="I" EFFECTIVE_FROM="' + effectiveDate + '" FLAG="W" NEW_CATEGORY="" NEW_SIM_NUMBER="' + $NewsimNumber + '" PAYMENT_TYPE="N" REASON_CODE="01" SIM_CHANGE_TYPE="N" TRANSACTION_AMOUNT=""';
setVariable('REQUESTDETAILS', REQUESTDETAILS);


<REQUEST API_CODE="81568" ENTITY_ID="064691285" EXTERNAL_APPLICATION="MOM" EXTERNAL_USER="ECW" />

let data = 'REQUEST API_CODE="81568" ENTITY_ID="' + noCCMSISDN + '" EXTERNAL_APPLICATION="MOM" EXTERNAL_USER="ECW"';
setVariable('SimRequest', data)


function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200",
            generalError['errorCode'] = "107",
            generalError['responseMessage'] = "Dear customer, your SIM card replacement request has not been processed. Please try again or contact our customer service via WhatsApp on 067000123 or the nearest MTN service point. THANKS";
        setVariable('generalError', generalError);


        let errorMsg = {};
        errorMsg['responseCode'] = 'E200';
        errorMsg['errorCode'] = "100";
        errorMsg['responseMessage'] = "Please enter the correct customer MSISDN";
        errorMsg['transactionID'] = $txnId;
        setVariable('errorMsg', errorMsg);
        setResponseCode('E200');
        return "45d174b";




    } catch (err) {
        logger.error("AID:111729597588035 | MID: 882ba57 " + err);
    }
    setResponseCode('E9000');
    return "45d174b";
}





//======================


function main() {
    try {
        let responseObj = _xml2json($response.msg);

        if (responseObj.subscriber.device && responseObj.subscriber.device.model) {
            let has_5G = responseObj.subscriber.device.has_5g;
            let lte = responseObj.subscriber.device.lte;
            let model = responseObj.subscriber.device.model;
            let modellastName = model.split('/').pop();

            // Ensure variables are defined and not null or undefined
            if (has_5G != null && lte != null) {
                if (has_5G == "Yes" && lte == "Yes") {
                    let message;
                    if (model.toLowerCase().includes('apple') || model.toLowerCase().includes('iphone')) {
                        message = `Votre ${modellastName} est compatible 5G. RDV dans les paramètres > réseaux cellulaires pour plus d'infos ou contactez-nous via WhatsApp au 067000123`;
                    } else {
                        message = `Votre ${modellastName} est compatible 5G. RDV dans les paramètres > connexions pour plus d'infos ou contactez-nous via WhatsApp au 067000123`;
                    }
                    setVariable("msg", message);
                    return "da19d9b";
                } else {
                    setVariable("msg", `Votre smartphone n'est pas compatible 5G. RDV chez MTN, TECNO ou SUPERSONIC pour vous en procurer. WhatsApp au 067000123 pour plus d infos. #5GCHARISMATIQUE`);
                    return "263d121";
                }
            }
        }
        setResponseCode("E300");
        return "b40863d";
    } catch (e) {
        console.log(e);
        setResponseCode("E300");
        return "b40863d";
    }
}



function main() {
    try {
        let generalError = {};
        generalError['responseCode'] = "E200",
            generalError['errorCode'] = "107",
            generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
        setVariable('generalError', generalError);

        if ($MSISDN != null) {
            let noCCMSISDN = String($MSISDN).slice(3);
            let data = 'REQUEST API_CODE="81568" ENTITY_ID="' + noCCMSISDN + '" EXTERNAL_APPLICATION="MOM" EXTERNAL_USER="ECW"';
            setVariable('SimRequest', data)
            return "d034673";
        } else {
            let errorMsg = {};
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = "101";
            errorMsg['responseMessage'] = "Please enter a valid MSISDN";
            errorMsg['transactionID'] = $txnId;
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "d9cd080";
        }
    } catch (e) {
        console.log(e);
        setResponseCode('E9000');
        return "d9cd080";
    }
}