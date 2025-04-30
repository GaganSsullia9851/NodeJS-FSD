function main() {
    try {
        if ($response.code == 'ECONNREFUSED' || $response.code == '800' || $response.code == '899') {
            return "657b68d";
        }
        if ($response.responseCode == '0') {
            if ($numberType.thirtyDayBundle.includes(String($offerID))) {
                setVariable('bonusOfferId', $numberType.thirtyDayBonus);
            } else {
                setVariable('bonusOfferId', $numberType.sevenDayBonus);
            }
            return "ad41758";
        } else {
            return "657b68d";
        }
    } catch (e) {
        logger.error(e);
    }

    return "682190c";// return end moduleId
}




function main() {
    try {
        if ($response.ocsResponse.errorCode == 0 || $response.ocsResponse.errorCode == 'OK') {
            let bonusVolume = $response.ocsResponse.services.service.volume;
            setVariable('msg', `BRAVO ! Vous bénéficiez d'un BONUS Mifi ${bonusVolume}gb valable 30 Jours sur le ${$bNumber}. Tapez *154*5*7# pour suivre votre consommation.`);
            return "31b1032";
        }
    } catch (e) {
        console.log(e);
    }
    return "682190c";
}


a93fabd