// // Custom code panel
// // main function is the default method executed after processing current module
// function main() {
//     try {
//       // {customerFullName}, ${firstName},${lastName}
//       if ($DOB) {
//         logger.trace('DOB ' + $DOB);

//         let userDOBParts, systemDOBParts;

//         // Parse 'YYYY-MM-DD' format
//         if ($DOB.includes('-')) {
//           userDOBParts = $DOB.split('-');
//           systemDOBParts = $dateOfBirth.split('-');
//         } else if ($DOB.includes('/')) {
//           // Parse 'DD/MM/YYYY' format
//           userDOBParts = $DOB.split('/');
//           systemDOBParts = $dateOfBirth.split('/');
//         }

//         // Convert parts to integers
//         const userYear = parseInt(userDOBParts[0], 10);
//         const userMonth = parseInt(userDOBParts[1], 10);
//         const userDay = parseInt(userDOBParts[2], 10);

//         const systemYear = parseInt(systemDOBParts[0], 10);
//         const systemMonth = parseInt(systemDOBParts[1], 10);
//         const systemDay = parseInt(systemDOBParts[2], 10);

//         // Compare the parsed dates
//         if (
//           userYear === systemYear &&
//           userMonth === systemMonth &&
//           userDay === systemDay
//         ) {
//           return "4662c81";
//         } else {
//           setVariable(
//             'responseMessage',
//             'Date de naissance erronee. Corrigez-la pour le SIM SWAP en libre-service ou contactez-nous via WhatsApp au 067000123 ou au point MTN. Merci'
//           );
//           setResponseCode('E2000');
//           return "45d174b";
//         }
//       } else {
//         setVariable(
//           'responseMessage',
//           'Date de naissance erronee. Corrigez-la pour le SIM SWAP en libre-service ou contactez-nous via WhatsApp au 067000123 ou au point MTN. Merci'
//         );
//         setResponseCode('E2000');
//         return "45d174b";
//       }
//     } catch (err) {
//       logger.error(
//         "AID:11632590776458 | MID: d0679d3 | MSISDN:" + $msisdn + " " + err
//       );
//     }

//     setResponseCode('E9000');
//     return "45d174b"; // return end moduleId
//   }


// Custom code panel
// main function is the default method executed after processing current module

// {customerFullName}, ${firstName},${lastName}

let DOB = "01-12-2000"
let dateOfBirth = "2000-12-01"

let userDOBParts, systemDOBParts;

// Parse 'YYYY-MM-DD' format
if (DOB.includes('-')) {
    userDOBParts = DOB.split('-');
    systemDOBParts = dateOfBirth.split('-') || dateOfBirth.split('/')
} else if (DOB.includes('/')) {
    // Parse 'DD/MM/YYYY' format
    userDOBParts = DOB.split('/');
    systemDOBParts = dateOfBirth.split('-');
    console.log(userDOBParts, systemDOBParts)
}

// Convert parts to integers
const userYear = parseInt(userDOBParts[0], 10);
const userMonth = parseInt(userDOBParts[1], 10);
const userDay = parseInt(userDOBParts[2], 10);

const systemYear = parseInt(systemDOBParts[0], 10);
const systemMonth = parseInt(systemDOBParts[1], 10);
const systemDay = parseInt(systemDOBParts[2], 10);

// Compare the parsed dates
if (
    userYear === systemYear &&
    userMonth === systemMonth &&
    userDay === systemDay
) {
    console.log('matching')
} else {
    console.log('Not matching')
    //return "45d174b";
}


// function main() {
//     try {
//         if ($custMSISDN != null) {
//             let noCCMSISDN = _substring($custMSISDN, 3);
//             setVariable('noCCMSISDN', noCCMSISDN);
//             let Exp1 = new RegExp("^24206[0-9]{7}$");
//             let Exp2 = new RegExp("^06[0-9]{7}$");
//             if (Exp1.test($custMSISDN)) {
//                 setVariable('msisdn', $custMSISDN);
//             } else if (Exp2.test($custMSISDN)) {
//                 setVariable('msisdn', '242' + $custMSISDN);
//             } else {
//                 setResponseCode('E3001');
//                 return "45d174b";
//             }
//             return "a5419f6";

//         }
//     } catch (err) {
//         logger.error("AID:111708588859801 | MID: a90f41c " + err);
//     }
//     return "45d174b";
// }