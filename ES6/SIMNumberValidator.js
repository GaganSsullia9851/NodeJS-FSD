const simRegex = /^\d{19}$/;
const simRegex1 = /^89242100\d{11}$/

let simNumber = 892421001234567891
let custMSISDN = 892421000000000000
let custMSISDN1 = 12345678911

// let Exp1 = new RegExp("^24206[0-9]{7}$");
// if (Exp1.test(custMSISDN)){
//     console.log('match')
// }else{
//     console.log('not matching==========')
// }


let Exp1 = new RegExp("^89242100[0-9]{11}$");
let Exp2 = new RegExp("^[0-9]{11}$");
if (Exp1.test(custMSISDN)) {
    return console.log('SIM NUmber match')
} if (Exp2.test(custMSISDN1)) {
    return console.log('SIM NUmber matching with =====================')
} else {
    return console.log('not matching==========')
}

// console.log(simNumber.length)
// if (simRegex1.test(simNumber)) {
//     return console.log(true)
// } else {
//     return console.log(false)
// }


// function main() {
//     try {
//         if ($NewsimNumber) {
//             let Exp = new RegExp("^89242100[0-9]{11}$");
//             if (Exp.test($NewsimNumber)) {
//                 return "5c10969"
//             } else {
//                 setVariable('responseMessage', 'Please enter valid SIM Number starts with 89242100')
//                 setResponseCode('E2000');
//                 return "45d174b";
//             }
//         } else {
//             setVariable('responseMessage', 'Please enter valid SIM Number starts with 89242100')
//             setResponseCode('E2000');
//             return "45d174b";
//         }
//     } catch (err) {
//         logger.error(`AID:111708588859801 | MID: 7d2a16f | MSISDN: ${$msisdn} ${err}`);
//     }
//     setResponseCode('E9000');
//     return "45d174b";// return end moduleId
// }


// function main() {
//     console.log("Gagan======inside GETProfile 1=======" + JSON.stringify($response.responseCode))
//     console.log("Gagan= inside GETProfile  2=======" + JSON.stringify($response.code))
//     try {
//         if ($response.responseCode == 0) {
//             console.log("Gagan=====GetProfile ======if condition============")
//             const responseBody = $response["soapenv:Envelope"]["soapenv:Body"]["sch:clientRequestResponse"]["env:EaiEnvelope"]["env:Payload"]["clm:CLM"].response.body;

//             if (responseBody && responseBody.customer && responseBody.customer.profileDetails && responseBody.customer.profileDetails.basicDetails) {
//                 const customerFullName = responseBody.customer.profileDetails.basicDetails.customerFullName;
//                 const firstName = responseBody.customer.profileDetails.basicDetails.firstName;
//                 const lastName = responseBody.customer.profileDetails.basicDetails.lastName;

//                 const dateOfBirth = responseBody.customer.profileDetails.basicDetails.dateOfBirth._JsonReader_PS_date;
//                 if (dateOfBirth) {
//                     const formattedDateOfBirth = dateOfBirth.split('T')[0];
//                     setVariable('dateOfBirth', formattedDateOfBirth);
//                 }
//                 setVariable('customerFullName', customerFullName);
//                 setVariable('firstName', firstName);
//                 setVariable('lastName', lastName);
//                 return "0442665";
//             }
//         } else {
//             setResponseCode('E9000');
//             return "45d174b";
//         }
//     } catch (err) {
//         logger.error(`AID:11632590776458 | MID: 5c10969 | MSISDN: ${$msisdn} ${err}`);
//     }
//     setResponseCode('E9000');
//     return "45d174b";
// }



function main() {
    try {
        if ($NewsimNumber) {
            let Exp1 = new RegExp("^89242100[0-9]{11}$");
            let Exp2 = new RegExp("^[0-9]{11}$");
            var xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:env="http://schema.concierge.com/Envelope" xmlns:sch="http://schema.concierge.com"><soapenv:Header/><soapenv:Body><sch:clientRequest><env:EaiEnvelope><env:ApplicationName>weca</env:ApplicationName><env:Domain>poartla</env:Domain><env:Service>GetCustomerProfile</env:Service><env:ServiceId>C0BB78C006F573</env:ServiceId><env:Language>En</env:Language><env:UserId>100001</env:UserId><env:Sender>USSD</env:Sender><env:MessageId>123</env:MessageId><env:Payload><clm:CLM xmlns:clm="http://schema.ttmw.com/CustomerProfile"><clm:Request><clm:OperationName>customerdetails</clm:OperationName><clm:RequestDetails><clm:query><clm:simple><clm:filter><clm:key>serviceNumber</clm:key><clm:value>${$noCCMSISDN}</clm:value></clm:filter></clm:simple></clm:query></clm:RequestDetails></clm:Request></clm:CLM></env:Payload></env:EaiEnvelope></sch:clientRequest></soapenv:Body></soapenv:Envelope>`;
            setVariable('request', xmlString);

            if (Exp1.test($NewsimNumber)) {
                setVariable('NewsimNumber', $NewsimNumber)
                return "5c10969"
            } else if (Exp2.test($NewsimNumber)) {
                setVariable('NewsimNumber', '89242100' + $NewsimNumber)
                return "5c10969"
            } else {
                setVariable('responseMessage', 'Please enter valid SIM Number')
                setResponseCode('E2000');
                return "45d174b";
            }
        } else {
            setVariable('responseMessage', 'Please enter valid SIM Number')
            setResponseCode('E2000');
            return "45d174b";
        }
    } catch (err) {
        logger.error(`AID:111708588859801 | MID: 7d2a16f | MSISDN: ${$msisdn} ${err}`);
    }
    setResponseCode('E9000');
    return "45d174b";// return end moduleId
}
