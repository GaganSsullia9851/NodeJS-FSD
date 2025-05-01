// function main() {
//     try {
//         if (true) {
//             function convertStringToArrayOfNumbers(stringNumbers) {
//                 const stringArray = stringNumbers.split(" ");
//                 return stringArray;
//             }
//             const stringNumbers = $GSM
//             const numberArray = convertStringToArrayOfNumbers(stringNumbers);


//             function isArraySubset(subset, superset) {
//                 for (let i = 0; i < subset.length; i++) {
//                     if (!superset.includes(subset[i])) {
//                       console.log("Gagan=====nomatch==GSM==123==="+JSON.stringify(superset)+" "+JSON.stringify(subset))
//                         return "4d0c4a1";
//                     }
//                 }
//             }
//             return isArraySubset($CALLED_NUMBER, numberArray);
//         }
//     } catch (err) {
//         logger.error("AID:11632590776458 | MID: 9e4975f | MSISDN:" + $msisdn + " " + err);
//     }
//     setResponseCode('E9000');
//     return "45d174b";
// }

// let CALLED_NUMBER=['123','456']
// let numberArray=['123','456','789']

// function isArraySubset(subset, superset) {
//     for (let i = 0; i < subset.length; i++) {
//         if (!superset.includes(subset[i])) {
//           //console.log("Gagan=====nomatch==GSM==123==="+JSON.stringify(superset)+" "+JSON.stringify(subset))
//             return console.log('not matching')
//         }
//     }
//     return console.log('matching')
// }
// isArraySubset(CALLED_NUMBER, numberArray);


// let OracleGSMNumber=['123','456','123']
// let EnteredNumber=['123','456',1]

// function isArraySubset(subset, superset) {
//     for (let i = 0; i < superset.length; i++) {
//         if (!subset.includes(superset[i])) {
//           //console.log("Gagan=====nomatch==GSM==123==="+JSON.stringify(superset)+" "+JSON.stringify(subset))
//             return console.log('not matching')
//         }
//     }
//     return console.log('matching')
// }
// isArraySubset(OracleGSMNumber, EnteredNumber);

// OracleGSMNumber



function hasMultipleMatches(array1, array2) {
    let matchingValuesCount = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            matchingValuesCount++;
            if (matchingValuesCount >= 2) {
                return true;
            }
        }
    }
    return false;
}

return hasMultipleMatches(OracleGSMNumber, EnteredGSMNumber);




// Example usage:
const OracleGSMNumber = ["068059430", "06816178", "06421374", '100'];
const EnteredGSMNumber = ["068059430", "068161781", "0642137461", '06816170', '10'];
const result = hasMultipleMatches(OracleGSMNumber, EnteredGSMNumber);
console.log("Multiple matches:", result); // Output: true

const OracleGSMNumber1 = [1, 2, 3];
const EnteredNumber1 = [4, 5, 6];
const result2 = hasMultipleMatches(OracleGSMNumber1, EnteredNumber1);
console.log("Multiple matches:", result2); // Output: false



function main() {
    try {
        if ($EnteredGSMNumber) {
            function convertStringToArrayOfNumbers(stringNumbers) {
                const stringArray = stringNumbers.split(" ");
                return stringArray;
            }
            const EnteredGSMNumber = convertStringToArrayOfNumbers($EnteredGSMNumber);
            console.log("Gagan===========GSM=123====" + JSON.stringify($EnteredGSMNumber) + " " + JSON.stringify($OracleGSMNumber))

            function hasMultipleMatches(array1, array2) {
                let matchingValuesCount = 0;
                for (let i = 0; i < array1.length; i++) {
                    if (array2.includes(array1[i])) {
                        matchingValuesCount++;
                        if (matchingValuesCount >= 2) {
                            let effectiveDate = _date2customformat(_now(), 'yyyy-mm-dd\'T\'HH:mm:ss.000\'Z\'');
                            setVariable('xml_request', `<?xml version="1.0"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://schema.concierge.com"><soapenv:Header/><soapenv:Body><com:clientRequest><EaiEnvelope xmlns="http://schema.concierge.com/Envelope" xmlns:ser="http://schema.concierge.com/Services"><ApplicationName>MTNGN</ApplicationName><Domain>abl_portal</Domain><Service>SIMSWAPService</Service><Language>En</Language><UserId>ISL</UserId><Sender>ISL</Sender><MessageId>abl_portal</MessageId><Payload><ser:Services><ser:Request><ser:Operation_Name>abillityReferenceApi</ser:Operation_Name><ser:ChangeServicesRequest><ser:request><EVENT><REQUEST API_CODE="7001" ENTITY_ID="${$noCCMSISDN}" EXTERNAL_APPLICATION="admin" EXTERNAL_REFERENCE="" EXTERNAL_USER="admin" INFO_LEVEL="" CLIENT_ID="MTNG" OPERATION_NAME="simchange" EXTERNAL_SYSTEMS_LOG_REFERNCE="${$txnId}"/><REQUESTDETAILS REQUEST_TYPE="SIMC" COMMENTS="Sim Change Test" EFFECTIVE_FLAG="I" EFFECTIVE_FROM="${effectiveDate}" FLAG="W" NEW_CATEGORY="" NEW_SIM_NUMBER="${$NewsimNumber}" PAYMENT_TYPE="N" REASON_CODE="01" SIM_CHANGE_TYPE="N" TRANSACTION_AMOUNT=""/><REQUESTCHARGES/></EVENT></ser:request></ser:ChangeServicesRequest></ser:Request></ser:Services></Payload></EaiEnvelope></com:clientRequest></soapenv:Body></soapenv:Envelope>`);
                            console.log("Gagan=====match===GSM=====" + JSON.stringify(superset) + " " + JSON.stringify(subset))
                            return "cab0294";
                        }
                    }
                }
                return "4d0c4a1";
            }

            return hasMultipleMatches(OracleGSMNumber, EnteredGSMNumber);
        }
    } catch (err) {
        logger.error("AID:11632590776458 | MID: 9e4975f | MSISDN:" + $msisdn + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";
}



function main() {
    try {
        var date1 = new Date();
        var year = date1.getFullYear();
        var month = String(date1.getMonth() + 1).padStart(2, '0');
        var day = String(date1.getDate()).padStart(2, '0');
        var hour = String(date1.getHours()).padStart(2, '0');
        var minute = String(date1.getMinutes()).padStart(2, '0');
        var second = String(date1.getSeconds()).padStart(2, '0');
        var dateString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        setVariable('effectiveDate', dateString)
        setVariable('action', 'SELF SIM SWAP BY SecQUEST');

        if ($language == 'en') {
            setVariable('lang', 'E');
        } else if ($language == 'fr') {
            setVariable('lang', 'F');
        } else {
            setVariable('lang', $language);
        }
        var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        var startTime = "08:00:00";
        var endTime = "20:00:00";

        var currentDate = new Date();

        var startDate = new Date(currentDate.toDateString() + " " + startTime);
        var endDate = new Date(currentDate.toDateString() + " " + endTime);

        if (startDate <= currentDate && currentDate <= endDate) {
            return "a90f41c"
        } else {
            setVariable(
                'responseMessage',
                'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00'
            );
            setResponseCode('E2000');
            return "45d174b";
        }
    } catch (err) {
        logger.error("AID:111708588859801 | MID: 882ba57 " + err);
    }
    setResponseCode('E9000');
    return "45d174b";
}

function main() {
    try {
        if ($result.responseCode == 899 || $result.code == 899) {
            setResponseCode('E2000')
            setVariable('responseMessage', 'Votre demande de changement de SIM na pas reussi.');
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
            setVariable('responseMessage', 'Votre demande de changement de SIM na pas reussi.');
            return "45d174b";
        }
    }
    catch (e) {
        logger.error("AID:2d1b576" + e);
        setResponseCode("E9000");
        return "45d174b";
    }
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