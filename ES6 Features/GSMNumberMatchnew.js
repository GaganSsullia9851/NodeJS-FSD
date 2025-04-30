// // function main() {
// //     try {
// //         if ($GSM3) {
// //             $GSMNumber.push($GSM3)
// //             console.log("Gagan=======complete Array=============" + $GSMNumber)

// //             function isArraySubset(subset, superset) {
// //                 for (let i = 0; i < subset.length; i++) {
// //                     if (!superset.includes(subset[i])) {
// //                         setVariable('responseMessage', 'Numero de telephone incorrecte');
// //                         setResponseCode('E2000');
// //                         return "45d174b";
// //                     }
// //                 }
// //                 let effectiveDate = _date2customformat(_now(), 'yyyy-mm-dd\'T\'HH:mm:ss.000\'Z\'');
// //                 setVariable('effectiveDate', effectiveDate);
// //                 let text = 'REQUEST API_CODE="7001" ENTITY_ID="' + $msisdn + '" EXTERNAL_APPLICATION="admin" EXTERNAL_REFERENCE="" EXTERNAL_USER="admin" INFO_LEVEL="" CLIENT_ID="MTNG" OPERATION_NAME="simchange" EXTERNAL_SYSTEMS_LOG_REFERNCE="' + $txnId + '"';
// //                 setVariable('text', text);
// //                 let REQUESTDETAILS = 'REQUESTDETAILS REQUEST_TYPE="SIMC" COMMENTS="Sim Change Test" EFFECTIVE_FLAG="I" EFFECTIVE_FROM="' + effectiveDate + '" FLAG="W" NEW_CATEGORY="" NEW_SIM_NUMBER="' + $NewsimNumber + '" PAYMENT_TYPE="N" REASON_CODE="01" SIM_CHANGE_TYPE="N" TRANSACTION_AMOUNT=""';
// //                 setVariable('REQUESTDETAILS', REQUESTDETAILS);
// //                 return "cab0294"
// //             }

// //             isArraySubset($CALLED_NUMBER, $GSMNumber)
// //         }
// //     } catch (err) {
// //         logger.error("AID:11632590776458 | MID: 415581b | MSISDN:" + $msisdn + " " + err);
// //     }
// //     setResponseCode('E9000');
// //     return "45d174b";// return end moduleId
// // }


// function isArraySubset(subset, superset) {
//     for (let i = 0; i < subset.length; i++) {
//         if (!superset.includes(subset[i])) {
//             return console.log("Not Match");
//         }
//     }
//     return console.log("Match");
// }

// //const array1 = [898988888800000000000,3333333333333,77777777777777777777,8888888888888888888,9];
// const array1 = ["1"]
// const array2 = [898988888800000000000, "1", 3333333333333, 77777777777777777777, 8888888888888888888, 1, 2, 3, 4, 5];

// (isArraySubset(array1, array2))


// function convertStringToArrayOfNumbers(stringNumbers) {
//     // Step 1: Split the string into an array of strings
//     const stringArray = stringNumbers.split(" ");

//     // Step 2: Convert each string element to a number
//     const numberArray = stringArray.map(Number);

//     return numberArray;
// }

// const stringNumbers = "066655959 066655959 066655959";
// const numberArray = convertStringToArrayOfNumbers(stringNumbers);

// console.log(numberArray[0]);




// function main() {
//     try {
//         if ($GSM3 && Array.isArray($GSMNumber) && Array.isArray($CALLED_NUMBER)) {
//             $GSMNumber.push($GSM3);
//             console.log(`Gagan=======GSMNumber complete Array==> ${$GSMNumber} API response number===========> ${$CALLED_NUMBER}`);

//             function isArraySubset(subset, superset) {
//                 for (let i = 0; i < subset.length; i++) {
//                     if (!superset.includes(subset[i])) {
//                         setVariable('responseMessage', 'Numero de telephone incorrecte');
//                         console.log('Gagan=========returning tp AppEnd=================');
//                         setResponseCode('E2000');
//                         return "45d174b";
//                     }
//                 }


//                 setVariable('xml_request', `<?xml version="1.0"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://schema.concierge.com"><soapenv:Header/><soapenv:Body><com:clientRequest><EaiEnvelope xmlns="http://schema.concierge.com/Envelope" xmlns:ser="http://schema.concierge.com/Services"><ApplicationName>MTNGN</ApplicationName><Domain>abl_portal</Domain><Service>SIMSWAPService</Service><Language>En</Language><UserId>ISL</UserId><Sender>ISL</Sender><MessageId>abl_portal</MessageId><Payload><ser:Services><ser:Request><ser:Operation_Name>abillityReferenceApi</ser:Operation_Name><ser:ChangeServicesRequest><ser:request><EVENT><REQUEST API_CODE="7001" ENTITY_ID="${$custMSISDN}" EXTERNAL_APPLICATION="admin" EXTERNAL_REFERENCE="" EXTERNAL_USER="admin" INFO_LEVEL="" CLIENT_ID="MTNG" OPERATION_NAME="simchange" EXTERNAL_SYSTEMS_LOG_REFERNCE="${$txnId}"/><REQUESTDETAILS REQUEST_TYPE="SIMC" COMMENTS="Sim Change Test" EFFECTIVE_FLAG="I" EFFECTIVE_FROM="${new Date().toISOString()}" FLAG="W" NEW_CATEGORY="" NEW_SIM_NUMBER="${$NewsimNumber}" PAYMENT_TYPE="N" REASON_CODE="01" SIM_CHANGE_TYPE="N" TRANSACTION_AMOUNT=""/><REQUESTCHARGES/></EVENT></ser:request></ser:ChangeServicesRequest></ser:Request></ser:Services></Payload></EaiEnvelope></com:clientRequest></soapenv:Body></soapenv:Envelope>`);
//                 return "cab0294";
//             }
//             // Calling the isArraySubset function and returning its result
//             return isArraySubset($CALLED_NUMBER, $GSMNumber);
//         }
//     } catch (err) {
//         logger.error("AID:11632590776458 | MID: 415581b | MSISDN:" + $msisdn + " " + err);
//     }
//     setResponseCode('E9000');
//     return "45d174b"; // return end moduleId
// }




// function main() {
//     try {
//         if ($GSM) {
//             function convertStringToArrayOfNumbers(stringNumbers) {
//                 const stringArray = stringNumbers.split(" ");
//                 const numberArray = stringArray.map(Number);
//                 return numberArray;
//             }
//             const stringNumbers = $GSM
//             const numberArray = convertStringToArrayOfNumbers(stringNumbers);

//             function isArraySubset(subset, superset) {
//                 for (let i = 0; i < subset.length; i++) {
//                     if (!superset.includes(subset[i])) {
//                         setVariable('responseMessage', 'Numero de telephone incorrecte');
//                         setResponseCode('E2000');
//                         return "45d174b";
//                     }
//                 }
//                 setVariable('xml_request', `<?xml version="1.0"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:com="http://schema.concierge.com"><soapenv:Header/><soapenv:Body><com:clientRequest><EaiEnvelope xmlns="http://schema.concierge.com/Envelope" xmlns:ser="http://schema.concierge.com/Services"><ApplicationName>MTNGN</ApplicationName><Domain>abl_portal</Domain><Service>SIMSWAPService</Service><Language>En</Language><UserId>ISL</UserId><Sender>ISL</Sender><MessageId>abl_portal</MessageId><Payload><ser:Services><ser:Request><ser:Operation_Name>abillityReferenceApi</ser:Operation_Name><ser:ChangeServicesRequest><ser:request><EVENT><REQUEST API_CODE="7001" ENTITY_ID="${$msisdn}" EXTERNAL_APPLICATION="admin" EXTERNAL_REFERENCE="" EXTERNAL_USER="admin" INFO_LEVEL="" CLIENT_ID="MTNG" OPERATION_NAME="simchange" EXTERNAL_SYSTEMS_LOG_REFERNCE="${$txnId}"/><REQUESTDETAILS REQUEST_TYPE="SIMC" COMMENTS="Sim Change Test" EFFECTIVE_FLAG="I" EFFECTIVE_FROM="${new Date().toISOString()}" FLAG="W" NEW_CATEGORY="" NEW_SIM_NUMBER="${$NewsimNumber}" PAYMENT_TYPE="N" REASON_CODE="01" SIM_CHANGE_TYPE="N" TRANSACTION_AMOUNT=""/><REQUESTCHARGES/></EVENT></ser:request></ser:ChangeServicesRequest></ser:Request></ser:Services></Payload></EaiEnvelope></com:clientRequest></soapenv:Body></soapenv:Envelope>`);
//                 return "cab0294";
//             }
//             return isArraySubset($CALLED_NUMBER, numberArray);
//         }
//     } catch (err) {
//         logger.error("AID:11632590776458 | MID: 415581b | MSISDN:" + $msisdn + " " + err);
//     }
//     setResponseCode('E9000');
//     return "45d174b";

// }


function convertStringToArrayOfNumbers(stringNumbers) {
    // Step 1: Split the string into an array of strings
    const stringArray = stringNumbers.split(" ");

    // Step 2: Convert each string element to a number
    const numberArray = stringArray.map(Number);

    return stringArray;
}

const stringNumbers = "066655959 066655959 066655959";
const numberArray = convertStringToArrayOfNumbers(stringNumbers);

console.log(numberArray);
