function compareDates(date1, date2) {
    // Function to parse date strings and extract components
    function parseDate(dateString) {
        const parts = dateString.split(/[-\/]/);
        return {
            day: parseInt(parts[2]),
            month: parseInt(parts[1]),
            year: parseInt(parts[0])
        };
    }

    // Parse both dates
    const parsedDate1 = parseDate(date1);
    const parsedDate2 = parseDate(date2);

    // Compare components in both formats
    const format1Match = parsedDate1.day === parsedDate2.day &&
        parsedDate1.month === parsedDate2.month &&
        parsedDate1.year === parsedDate2.year;

    const format2Match = parsedDate1.day === parsedDate2.year &&
        parsedDate1.month === parsedDate2.month &&
        parsedDate1.year === parsedDate2.day;

    return format1Match || format2Match;
}

const DOB1 = "01-12-2000";
const DOB2 = "2000-12-01";
const DOB3 = "01-12-2000";

const DOB4 = "01/12/2000";
const DOB5 = "2000-12-01";
const DOB6 = "01-12-2000";
const DOB7 = "01/12/2000";
const DOB8 = "01-12/2000";

console.log(compareDates(DOB1, DOB2)); // true
console.log(compareDates(DOB1, DOB3)); // true

console.log(compareDates(DOB4, DOB5)); // true
console.log(compareDates(DOB4, DOB6)); // true
console.log(compareDates(DOB4, DOB7)); // true
console.log(compareDates(DOB4, DOB8)); // true




// Custom code panel
// main function is the default method executed after processing current module
// function main() {
//     try {
//         if ($DOB) {
//             function compareDates(date1, date2) {
//                 // Function to parse date strings and extract components
//                 function parseDate(dateString) {
//                     const parts = dateString.split(/[-\/]/);
//                     return {
//                         day: parseInt(parts[0]),
//                         month: parseInt(parts[1]),
//                         year: parseInt(parts[2])
//                     };
//                 }

//                 // Parse both dates
//                 const parsedDate1 = parseDate(date1);
//                 const parsedDate2 = parseDate(date2);

//                 // Compare components in both formats
//                 const format1Match = parsedDate1.day === parsedDate2.day &&
//                     parsedDate1.month === parsedDate2.month &&
//                     parsedDate1.year === parsedDate2.year;

//                 const format2Match = parsedDate1.day === parsedDate2.year &&
//                     parsedDate1.month === parsedDate2.month &&
//                     parsedDate1.year === parsedDate2.day;

//                 return format1Match || format2Match;
//             }

//             compareDates($DOB, $dateOfBirth)
//             return "4662c81";
//         } else {
//             return "3173a5b"
//         } else {
//             setVariable(
//                 'responseMessage',
//                 'Date de naissance erronee. Corrigez-la pour le SIM SWAP en libre-service ou contactez-nous via WhatsApp au 067000123 ou au point MTN. Merci'
//             );
//             setResponseCode('E2000');
//             return "45d174b";
//         }
//     } catch (err) {
//         logger.error(
//             "AID:11632590776458 | MID: d0679d3 | MSISDN:" + $msisdn + " " + err
//         );
//     }

//     setResponseCode('E9000');
//     return "45d174b"; // return end moduleId
// }



// function main() {
//     try {
//         if ($DOB) {
//             function compareDates(date1, date2) {
//                 function parseDate(dateString) {
//                     const parts = dateString.split(/[-\/]/);
//                     return {
//                         day: parseInt(parts[2]),
//                         month: parseInt(parts[1]),
//                         year: parseInt(parts[0])
//                     };
//                 }
//                 const parsedDate1 = parseDate(date1);
//                 const parsedDate2 = parseDate(date2);

//                 const format1Match = parsedDate1.day === parsedDate2.day &&
//                     parsedDate1.month === parsedDate2.month &&
//                     parsedDate1.year === parsedDate2.year;

//                 const format2Match = parsedDate1.day === parsedDate2.year &&
//                     parsedDate1.month === parsedDate2.month &&
//                     parsedDate1.year === parsedDate2.day;

//                 return format1Match || format2Match;
//             }
//             const comparisonResult = compareDates($DOB, $dateOfBirth);
//             if (comparisonResult) {
//                 return "4662c81";
//             } else {
//                 return "3173a5b";
//             }
//         } else {
//             setVariable(
//                 'responseMessage',
//                 'Date de naissance erronee. Corrigez-la pour le SIM SWAP en libre-service ou contactez-nous via WhatsApp au 067000123 ou au point MTN. Merci'
//             );
//             setResponseCode('E2000');
//             return "45d174b";
//         }
//     } catch (err) {
//         logger.error(
//             "AID:11632590776458 | MID: d0679d3 | MSISDN:" + $msisdn + " " + err
//         );
//         setResponseCode('E9000');
//         return "45d174b";
//     }
// }
