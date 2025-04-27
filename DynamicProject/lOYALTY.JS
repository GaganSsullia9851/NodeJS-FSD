function main() {
    try {

        //Calculate expiry date in format DD-MM-YY Start
        function calculateExpiryDate(date1, validityDays) {
            // Calculate expiry date in milliseconds
            var expiryTime = date1.getTime() + (validityDays * 24 * 60 * 60 * 1000);
            // Create a new Date object for the expiry date
            var expiryDate = new Date(expiryTime);
            // Extract day, month, and year from the expiry date
            var day = expiryDate.getDate();
            var month = expiryDate.getMonth() + 1; // Month is zero-based
            var year = expiryDate.getFullYear() % 100; // Get last two digits of the year
            // Ensure day and month are formatted to have leading zeros if necessary
            var formattedDay = ('0' + day).slice(-2);
            var formattedMonth = ('0' + month).slice(-2);
            // Format the date in "DD-MM-YY" format
            var formattedExpiryDate = formattedDay + '-' + formattedMonth + '-' + year;
            return formattedExpiryDate;
        }
        var date1 = new Date(); // Current date/time

        var expiryDate = calculateExpiryDate(date1, $validity);
        //Expiry date calculate end
        setVariable('expiryDate', expiryDate);
        // let expDate = _date2customformat(date1, 'dd-mm-yyyy');
        console.log("003529c before updateBalanceAndDate code----");
        var expiryDateForUpdateBalance = new Date(date1.getTime() + (Number($validity) * 60 * 60 * 1000));
        setVariable('expiryDateForUpdateBalance', expiryDateForUpdateBalance);
        console.log("003529c expiryDateForUpdateBalance code----" + expiryDateForUpdateBalance);
        console.log("003529c expiryDate code----" + expiryDate);

        let successMsg = {};
        let errorMsg = {};
        let validity = $validity;
        let day = validity === '1' ? `${validity} jour` : `${validity} jours
`;

        if ($resultsets.result1.code == 0) {
            if ($rewardName.includes('Voice')) {
                console.log("003529c voice code----");
                setVariable('DAID', String($numberType.VOICE));
                setVariable('AAR', 60 * $volume * 100);
                let calcVolume = $volume;

                //setVariable('MESSAGE', "Y'ello ! Vous avez reçu un bonus appel de "+calcVolume+" min utilisable vers MTN, suite à l'activation du forfait "+$offerName+". Bonus utilisable jusqu'à "+expiryDate+". #Charismatique")
                //setVariable('MESSAGE', `Y'ello! Grace à MTN Fidelité le forfait active vous donne droit à un bonus de ${calcVolume} Min et validité ${day}, tapez *154*100*1# 0K pour le voir #RéseauCharismatique`)
                setVariable('MESSAGE', `Y'ello! Grace a MTN Fidelite le forfait active vous donne droit a un bonus de ${calcVolume} min valable ${day} expire ${expiryDate} tapez *154*100*1# ok pour le voir`)

                console.log("003529c voice end code----");
            } else if ($rewardName.includes('SMS')) {
                console.log("003529c sms code----");
                setVariable('DAID', String($numberType.SMS));
                setVariable('AAR', 20 * $volume * 100);
                let calcVolume = $volume;
                //setVariable('MESSAGE', "Y'ello ! Vous avez reçu un bonus de "+calcVolume+" sms utilisable vers MTN, suite à l'activation du forfait "+$offerName+". Bonus utilisable jusqu'à "+expiryDate+". #Charismatique");
                //setVariable('MESSAGE', `Y'ello! Grace à MTN Fidelité le forfait active vous donne droit à un bonus ${calcVolume} sms et validité ${day}, tapez *154*100*1# 0K pour le voir #RéseauCharismatique`);
                setVariable('MESSAGE', `Y'ello! Grace a MTN Fidelite le forfait active vous donne droit a un bonus de ${calcVolume} sms valable ${day} expire ${expiryDate} tapez *154*100*1# ok pour le voir`);

                console.log("003529c sms end code----");
            } else if ($rewardName.includes('Data')) {
                console.log("003529c data code----");
                setVariable('DAID', String($numberType.DATA));
                setVariable('AAR', 100 * $volume);
                setVariable('MESSAGE', "Y'ello ! Vous avez reçu un bonus internet de " + $volume + " mb suite à l'activation du forfait " + $offerName + ". Bonus utilisable jusqu'à " + expiryDate + ".  #Charismatique");
                console.log("003529c data end code----");
            }
            successMsg['responseCode'] = 'S200';
            successMsg['errorCode'] = '111';
            successMsg['responseMessage'] = "Bonjour vous avez gagné " + $rewardName;
            setVariable('successMsg', successMsg);
            setResponseCode('S200');
            return "101a992";
        } else {
            errorMsg['responseCode'] = 'E200';
            errorMsg['errorCode'] = '112';
            errorMsg['responseMessage'] = "GiftDataAnalytics DB update error";
            setVariable('errorMsg', errorMsg);
            setResponseCode('E200');
            return "194a1dc";
        }
    } catch (e) {
        console.log(e);
    }
    let generalError = {};
    generalError['responseCode'] = "E200";
    generalError['errorCode'] = "113";
    generalError['responseMessage'] = "Dear Customer, Your request cannot be processed now. Please try again later.";
    setVariable('generalError', generalError);
    setResponseCode('E9000');
    return "194a1dc";
}