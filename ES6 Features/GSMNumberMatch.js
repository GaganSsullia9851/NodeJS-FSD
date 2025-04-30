function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const sortedArr1 = arr1.slice().sort();
    //console.log(sortedArr1)
    const sortedArr2 = arr2.slice().sort();

    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}

// Example usage:
const array1 = ['069140928', '068638321', '0667745101'];
const array2 = ['069140928', '068638321', '066774510111'];

//069140928,068638321,0667745101

if (arraysEqual(array1, array2)) {
    console.log("Arrays are equal regardless of order");
} else {
    console.log("Arrays are not equal");
}

//=====================================================


function arePhoneArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const formatPhoneNumber = (phoneNumber) => phoneNumber.replace(/\D/g, '');

    const sortedArr1 = arr1.map(formatPhoneNumber).sort();
    const sortedArr2 = arr2.map(formatPhoneNumber).sort();

    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}

// Example usage:
const phoneNumbers1 = ["9876543210", "(555) 55555552", "1234567890"];
const phoneNumbers2 = ["9876543210", "(555) 55555552", "1234567890"];

if (arePhoneArraysEqual(phoneNumbers1, phoneNumbers2)) {
    console.log("Phone number arrays are equal regardless of order========pass====");
} else {
    console.log("Phone number arrays are not equal");
}



function arePhoneArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const formatPhoneNumber = (phoneNumber) => phoneNumber.replace(/\D/g, '');

    const sortedArr1 = arr1.map(formatPhoneNumber).sort();
    const sortedArr2 = arr2.map(formatPhoneNumber).sort();

    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}




//=====================================================

function main() {
    try {
        if ($GSM3) {
            $GSMNumber.push($GSM3)
            console.log("Gagan=======complete Array=============" + $GSMNumber)
            function arePhoneArraysEqual(arr1, arr2) {
                if (arr1.length !== arr2.length) {
                    return false;
                }
                const formatPhoneNumber = (phoneNumber) => phoneNumber.replace(/\D/g, '');
                const sortedArr1 = arr1.map(formatPhoneNumber).sort();
                const sortedArr2 = arr2.map(formatPhoneNumber).sort();

                return sortedArr1.every((value, index) => value === sortedArr2[index]);
            }

            if (arePhoneArraysEqual($CALLED_NUMBER, $GSMNumber)) {
                let effectiveDate = _date2customformat(_now(), 'yyyy-mm-dd\'T\'HH:mm:ss.000\'Z\'');
                setVariable('effectiveDate', effectiveDate);
                let text = 'REQUEST API_CODE="7001" ENTITY_ID="' + $msisdn + '" EXTERNAL_APPLICATION="admin" EXTERNAL_REFERENCE="" EXTERNAL_USER="admin" INFO_LEVEL="" CLIENT_ID="MTNG" OPERATION_NAME="simchange" EXTERNAL_SYSTEMS_LOG_REFERNCE="' + $txnId + '"';
                setVariable('text', text);
                let REQUESTDETAILS = 'REQUESTDETAILS REQUEST_TYPE="SIMC" COMMENTS="Sim Change Test" EFFECTIVE_FLAG="I" EFFECTIVE_FROM="' + effectiveDate + '" FLAG="W" NEW_CATEGORY="" NEW_SIM_NUMBER="' + $NewsimNumber + '" PAYMENT_TYPE="N" REASON_CODE="01" SIM_CHANGE_TYPE="N" TRANSACTION_AMOUNT=""';
                setVariable('REQUESTDETAILS', REQUESTDETAILS);
                return "cab0294"
            } else {
                setVariable('responseMessage', 'GSM Numbers are not matching');
                setResponseCode('E2000');
                return "45d174b";
            }
        }
    } catch (err) {
        logger.error("AID:11632590776458 | MID: 415581b | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}




function main() {
    try {
        if ($response.code == 899 || $response.code == '899' || $response.responseCode === 899) {
            setVariable('status', 'Failed');
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "ece7096";
        } else if ($response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"] == "0") {
            setVariable('status', 'Success');
            setResponseCode('E2000')
            setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM est traitee. Veuillez inserer la nouvelle carte SIM dans 5 minutes.');
            return "2d1b576";
        } else if ($response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"] == "SIMC-068") {
            setVariable('status', 'Failed');
            setVariable('responseMessage', 'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00.');
            sendImmediateResponse('E2000');
            return "2d1b576";
        } else {

        }



        console.error('Gagan DOB ====GSM Number====MID: cab0294')
        console.error("Gagan=====GSM API Response=======" + JSON.stringify($response))
        console.error("Gagan=====GSM API Response=======" + JSON.stringify($response.code))
        var responseCode = $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"];
        console.error("Gagan============" + JSON.stringify(responseCode))




        let result = {
            "responseCode": $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"],
            "code": $response.code
        }


        let result = {
            "code": $response.code
            "responseCode": $response.responseCode
        }
        setVariable('result', result);


        let result = {
            "responseCode": $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"],
            "code": $response.code,
            "responseCode": $response.responseCode
        }
        setVariable('result', result);
        if (responseCode == "0" || $response.code == 0) {
            setVariable('status', 'Success');
        }
        else {
            setVariable('status', 'Failed');
        }
        setVariable('responseMessage', 'Votre demande de changement de SIM est en cours. Merci de patienter');
        sendImmediateResponse('E2000')
        return "ece7096";

        // if (responseCode == "0") {
        //     setVariable('status', 'Success');
        //     setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM est traitee. Veuillez inserer la nouvelle carte SIM dans 5 minutes.');
        //     sendImmediateResponse('E2000');
        //     return "";
        // } else if (responseCode == "SIMC-068") {
        //     setVariable('status', 'Failed');
        //     setVariable('responseMessage', 'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00.');
        //     sendImmediateResponse('E2000');
        //     return "";
        // } else if ($response.code == "899" || $response.responseCode=="899") {
        //   setVariable('status', 'Failed');
        //     setVariable('responseMessage', 'Votre demande de changement de SIM na pas reussi.');
        //     sendImmediateResponse('E2000');
        //     return "";
        // } else {
        //     setVariable('status', 'Failed');
        //     setVariable('responseMessage', 'Votre demande de changement de SIM na pas reussi.');
        //     sendImmediateResponse('E2000');
        //     return "";
        // }
    } catch (err) {
        console.error("Gagan==going to mysql" + err)
        // if (err === "118") {
        //     setVariable('status', 'Failed');
        //     sendImmediateResponse('E105');
        //     return "ece7096";
        // }
        logger.error("AID:11632590776458 | MID: cab0294 | MSISDN:" + $MSISDN + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";
}


function main() {
    try {
        console.error("Gagan=====MID: ece7096   MySQL=======")
        console.error("Gagan=====MID: ece7096   MySQL=======" + JSON.stringify($result))
        console.error("Gagan=====MID: ece7096   MySQL=======" + JSON.stringify($response))
        if ($result.responseCode == 899 || $result.code == 899) {
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "45d174b";
        }
        if ($result.responseCode == 0 || $result.code == 0) {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM est traitee. Veuillez inserer la nouvelle carte SIM dans 5 minutes.');
            return "45d174b";
        }

        if ($result.responseCode == "SIMC-068" || $result.code == "SIMC-068") {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00.');

        } else {
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "45d174b";
        }
    }
    catch (e) {
        logger.error("AID:2d1b576" + e);
        setResponseCode("E9000");
        return "45d174b";
    }
}


let result = {
    "responseCode": $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"],
    "code": $response.code,
    "responseCode": $response.responseCode
}
setVariable('result', result);
if (responseCode == "0" || $response.code == 0) {
    setVariable('status', 'Success');
}
else {
    setVariable('status', 'Failed');
}
setVariable('responseMessage', 'Votre demande de changement de SIM est en cours. Merci de patienter');
sendImmediateResponse('E2000')
return "ece7096";


function main() {
    try {
        if ($response.code == 899 || $response.code == '899' || $response.responseCode == 899) {
            let result = {
                "code": $response.code,
                "responseCode": $response.responseCode
            }
            setVariable('result', result);
            setVariable('status', 'Failed');

            setVariable('responseMessage', `Votre demande de changement de SIM est en cours. Merci de patienter`);
            sendImmediateResponse('E2000')
            return "ece7096";
        }
        let result = {
            "responseCode": $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"],
            "code": $response.code,
            "responseCode": $response.responseCode
        }
        setVariable('result', result);
        if (responseCode == "0" || $response.code == 0) {
            setVariable('status', 'Success');
        }
        else {
            setVariable('status', 'Failed');
        }
        setVariable('responseMessage', 'Votre demande de changement de SIM est en cours. Merci de patienter');
        sendImmediateResponse('E2000')
        return "ece7096";
    } catch (err) {
        logger.error("AID:11632590776458 | MID: cab0294 | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";
}


// Custom code panel
// main function is the default method executed after processing current module
function main() {
    try {
        if ($result.responseCode == 899 || $result.code == 899) {
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "45d174b";
        }
        if ($result.responseCode == 0) {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM est traitee. Veuillez inserer la nouvelle carte SIM dans 5 minutes.');
            return "45d174b";
        }
        if ($result.responseCode == "SIMC-068" || $result.code == "SIMC-068") {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00.');

        } else {
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "45d174b";
        }
    }
    catch (e) {
        logger.error("AID:2d1b576" + e);
        setResponseCode("E9000");
        return "45d174b";
    }
}


function main() {
    try {
        if ($result.responseCode == 899 || $result.code == 899) {
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "45d174b";
        }
        else if ($result.responseCode == "0" || $result.responseCode == 0) {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM est traitee. Veuillez inserer la nouvelle carte SIM dans 5 minutes.');
            return "45d174b";
        }
        else if ($result.responseCode == "SIMC-068") {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00.');
        } else {
            setResponseCode('E2000')
            setVariable('responseMessage', `Votre demande de changement de SIM n'a pas reussi.Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.`);
            return "45d174b";
        }
    }
    catch (err) {
        logger.error("AID:11632590776458 | MID: ece7096 | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode("E9000");
    return "45d174b";
}



TRX_DATETIME          VARCHAR2(100) 
CM_MSISDN             VARCHAR2(50)  
SWAP_MSISDN           VARCHAR2(50)  
NEW_SIM_NUMBER        VARCHAR2(100) 
TRX_ACTION            VARCHAR2(300) 
TRX_CANAL             VARCHAR2(100) 
TRX_STATUS            VARCHAR2(300) 
TRANSACTIONID         VARCHAR2(100) 
CLM_RESCODE           VARCHAR2(100) 
CLM_RESMSG            VARCHAR2(300)



function main() {
    try {
        if ($response.responseCode == 0 || $response.code == 0) {
            let dbResponseArray = $resultsets.result1.rows
            if (Array.isArray(dbResponseArray) && dbResponseArray.length > 0) {
                setVariable('responseMessage', `Ce numero a deja ete reactive aujourd’hui. Veuillez reessayer ulterieurement. Merci.`)
                setResponseCode('E2000');
                return "45d174b";
            } else {
                return "45d174b";
            }
        } else {
            setVariable('responseMessage', 'Response Timeout')
            setResponseCode('E2000');
            return "45d174b";
        }
    } catch (err) {
        logger.error("AID:11632590776458 | MID: 032c43e | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}