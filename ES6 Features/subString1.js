let originalNumber = 242065200075;

// Convert the number to a string
let numberString = originalNumber.toString();

// Remove the first three characters (242)
let result = numberString.slice(3);

console.log(result, typeof (result)); // Output: 065200075


console.log(Number('0997777'))


function main() {
    try {
        if ($NewsimNumber) {
            let Exp = new RegExp("^89242100[0-9]{11}$");
            if (Exp.test($NewsimNumber)) {
                console.log('Gagan=======noCCMSISDN===============' + $noCCMSISDN)
                console.log('Gagan=======noCCMSISDN===============' + typeof ($noCCMSISDN))
                return "5c10969"
            } else {
                setVariable('responseMessage', 'Please enter valid SIM Number starts with 89242100')
                setResponseCode('E2000');
                return "45d174b";
            }
        } else {
            setVariable('responseMessage', 'Please enter valid SIM Number starts with 89242100')
            setResponseCode('E2000');
            return "45d174b";
        }
    } catch (err) {
        logger.error(`AID:111708588859801 | MID: 7d2a16f | MSISDN: ${$msisdn} ${err}`);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}


function main() {
    try {
        if ($custMSISDN != null) {

            let noCCMSISDN = String($custMSISDN);
            let result = noCCMSISDN.slice(3);
            //let noCCMSISDN = _substring($custMSISDN,3);
            setVariable('noCCMSISDN', result);
            console.log('Gagan=================menu output===================' + result)
            let Exp1 = new RegExp("^24206[0-9]{7}$");
            let Exp2 = new RegExp("^06[0-9]{7}$");
            if (Exp1.test($custMSISDN)) {
                setVariable('msisdn', $custMSISDN);
            } else if (Exp2.test($custMSISDN)) {
                setVariable('msisdn', '242' + $custMSISDN);
            } else {
                setResponseCode('E3001');
                return "45d174b";
            }
            return "a5419f6";

        }
    } catch (err) {
        logger.error("AID:111708588859801 | MID: a90f41c " + err);
    }
    return "45d174b";
}


["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "203", "204", "206", "901", "222", "75", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "201", "202", "205", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1012", "1016", "1017", "1018", "1019", "1020", "1021", "1022", "1023", "1025", "1100", "1312", "2001", "2002", "2003", "2004", "2005", "2011", "2080", "2081", "2082", "2083", "2087"]

function main() {
    try {
        if ($NewsimNumber) {
            let Exp = new RegExp("^89242100[0-9]{11}$");
            if (Exp.test($NewsimNumber)) {
                console.log('Gagan=======noCCMSISDN===============' + $noCCMSISDN)
                console.log('Gagan=======noCCMSISDN===============' + typeof ($noCCMSISDN))

                var xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:env="http://schema.concierge.com/Envelope" xmlns:sch="http://schema.concierge.com"><soapenv:Header/><soapenv:Body><sch:clientRequest><env:EaiEnvelope><env:ApplicationName>weca</env:ApplicationName><env:Domain>poartla</env:Domain><env:Service>GetCustomerProfile</env:Service><env:ServiceId>C0BB78C006F573</env:ServiceId><env:Language>En</env:Language><env:UserId>100001</env:UserId><env:Sender>USSD</env:Sender><env:MessageId>123</env:MessageId><env:Payload><clm:CLM xmlns:clm="http://schema.ttmw.com/CustomerProfile"><clm:Request><clm:OperationName>customerdetails</clm:OperationName><clm:RequestDetails><clm:query><clm:simple><clm:filter><clm:key>serviceNumber</clm:key><clm:value>${$noCCMSISDN}</clm:value></clm:filter></clm:simple></clm:query></clm:RequestDetails></clm:Request></clm:CLM></env:Payload></env:EaiEnvelope></sch:clientRequest></soapenv:Body></soapenv:Envelope>`;


                setVariable('request', xmlString);
                return "5c10969"
            } else {
                setVariable('responseMessage', 'Please enter valid SIM Number starts with 89242100')
                setResponseCode('E2000');
                return "45d174b";
            }
        } else {
            setVariable('responseMessage', 'Please enter valid SIM Number starts with 89242100')
            setResponseCode('E2000');
            return "45d174b";
        }
    } catch (err) {
        logger.error(`AID:111708588859801 | MID: 7d2a16f | MSISDN: ${$msisdn} ${err}`);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}


function main() {
    try {
        console.log("Gagan Get account details checking")
        let activeOffers = [];
        if ($response.responseCode == '0' && $response.serviceClassCurrent && $response.offerInformationList) {
            setVariable('ServiceClass', $response.serviceClassCurrent);
            if ($response.offerInformationList.length > 0) {
                $response.offerInformationList.forEach(offer => {
                    if (_getTime(offer.expiryDate) >= _now() || _getTime(offer.expiryDateTime) >= _now()) {
                        activeOffers.push(offer.offerID);
                    }
                });
                setVariable('activeOffersList', activeOffers);
            }
            if ($numberType.postpaid.includes(String($response.serviceClassCurrent))) {
                setVariable('responseMessage', 'Le numero que vous souhaitez reactiver a un profil special et ne peut pas etre remplace en libre-service. Contactez-nous via WhatsApp au 067000123 ou au point MTN le plus proche. Merci.')
                setResponseCode('E2000');
                return "45d174b"; // postpaid activation
            }
            if ($numberType.prepaid.includes(String($response.serviceClassCurrent)) || activeOffers.length > 0) {
                return "1028553" // prepaid activation
            }
            else {
                setResponseCode('E203');
                return "45d174b";
            }
        }
    } catch (err) {
        logger.error("AID:111708588859801 | MID: a5419f6 " + err);
    }
    setResponseCode('E203');
    return "45d174b";// return end moduleId
}


// Custom code panel
// main function is the default method executed after processing current module
function main() {
    console.log("Gagan==========888888888888888========" + JSON.stringify($response))
    console.log('Gagan=1===$response.resultsets.result1.rows=======' + JSON.stringify($resultsets.result1.rows))
    console.log("Gagan==================" + JSON.stringify($response.Response))
    try {
        let GSMNumber = []
        setVariable('GSMNumber', GSMNumber);
        let CALLED_NUMBER = []
        if ($response.responseCode == 0 || $response.code == 0) {
            console.log('Gagan    inside if condition')
            console.log('Gagan==2==$response.resultsets.result1.rows=======' + JSON.stringify($resultsets.result1.rows))
            let dbResponseArray = $resultsets.result1.rows

            console.log('Gagan====dbResponseArray=======' + dbResponseArray)
            if (Array.isArray(dbResponseArray) && dbResponseArray.length > 0 && dbResponseArray.length > 1) {
                dbResponseArray.forEach((res) => {
                    CALLED_NUMBER.push(res.CALLED_NUMBER)
                })
                console.log("Gagan======3===CALLED_NUMBER==============" + CALLED_NUMBER)
                setVariable('CALLED_NUMBER', CALLED_NUMBER);
                return "9e4975f"
            } else {
                setVariable('responseMessage', 'Vous devez avoir au minimum 2 numeros les plus utilise pour realiser SIM SWAP en libre-service. Merci')
                setResponseCode('E2000');
                return "45d174b";
            }
        } else {
            return "45d174b"
        }

    } catch (err) {
        logger.error("AID:11632590776458 | MID: 4662c81 | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}

//|Plugin Response of oracle, Response {"code":0,"resultsets":{"result1":{"code":0,"rows":[{"CALLING_NUMBER":"242066565494","CALLED_NUMBER":"069140928","NBR_OF_TRANSACTIONS":1},{"CALLING_NUMBER":"242069020739","CALLED_NUMBER":"068638321","NBR_OF_TRANSACTIONS":1},{"CALLING_NUMBER":"242068607172","CALLED_NUMBER":"0667745101","NBR_OF_TRANSACTIONS":1}]}},"pecounter":16,"peThrottleValue":"9000","responseTime":5}