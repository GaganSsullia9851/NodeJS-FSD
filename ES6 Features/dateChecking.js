// Get the current time
var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

//console.log(currentTime, new Date(),new Date().toDateString())

// Define start and end times as strings (24-hour format)
var startTime = "08:00:00";  // Replace with your desired start time
var endTime = "20:00:00";    // Replace with your desired end time

// Convert time strings to Date objects for comparison
var currentDate = new Date();
var startDate = new Date(currentDate.toDateString() + " " + startTime);
var endDate = new Date(currentDate.toDateString() + " " + endTime);

// Check if the current time is between start time and end time
if (startDate <= currentDate && currentDate <= endDate) {
    console.log("The current time is between " + startTime + " and " + endTime);
} else {
    console.log("The current time is outside the specified range.");
}



var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
var startTime = "08:00:00";
var endTime = "20:00:00";

var currentDate = new Date();
var startDate = new Date(currentDate.toDateString() + " " + startTime);
var endDate = new Date(currentDate.toDateString() + " " + endTime);

if (startDate <= currentDate && currentDate <= endDate) {
    console.log("The current time is between " + startTime + " and " + endTime);
} else {
    console.log("The current time is outside the specified range.");
}


// function main() {
//     try {
//         let txnDate = _date2customformat(_now(), 'yyyy-mm-dd HH:mm:ss');
//         //txnDate = new Date();
//         setVariable('txnDate', txnDate);
//         setVariable('action', 'SELF SIM SWAP BY SecQUEST');
//         //setVariable('msisdn',$MSISDN)
//         if ($language == 'en') {
//             setVariable('lang', 'E');
//         } else if ($language == 'fr') {
//             setVariable('lang', 'F');
//         } else {
//             setVariable('lang', $language);
//         }
//         var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
//         var startTime = "08:00:00";
//         var endTime = "20:00:00";

//         var currentDate = new Date();
//         var startDate = new Date(currentDate.toDateString() + " " + startTime);
//         var endDate = new Date(currentDate.toDateString() + " " + endTime);

//         if (startDate <= currentDate && currentDate <= endDate) {
//             return "a90f41c"
//         } else {
//             setVariable(
//                 'responseMessage',
//                 'Date de naissance erronee. Corrigez-la pour le SIM SWAP en libre-service ou contactez-nous via WhatsApp au 067000123 ou au point MTN. Merci'
//             );
//             setResponseCode('E2000');
//             return "45d174b";
//         }
//     } catch (err) {
//         logger.error("AID:111708588859801 | MID: 882ba57 " + err);
//     }
//     setResponseCode('E9000');
//     return "45d174b";
// }