function main() {
    try {

        if ($response.code == 'ECONNREFUSED' || $response.code == '800' || $response.code == '899') {
            return "657b68d";
        }

        if ($response.ocsResponse && ($response.ocsResponse.errorCode == '0' || $response.ocsResponse.errorCode == 'OK')) {
            if ($requestType == "self") {
                setVariable("msg", `BRAVO! Votre forfait ${$offerName} a été activé avec succès! TAPEZ *154*100*3# pour vérifier votre solde Internet`);
            } else {
                setVariable("msg", `Bravo! Vous avez activé ${$volume} sur ${$number} avec succès. Offre valable jusqu'au ${$datePart} à ${$time}. Profitez des meilleures offres 5G avec MTN`);
            }
            return "31b1032";
        } else {
            return "657b68d";
        }
    } catch (e) {
        console.log(e);
    }

    return "682190c";
}


{
    loginId: 'ibrahima',
    firstName: 'Ibrahima',
    password: 'Ibrahima@123',
    lastName: 'User',
    contactNo: '242068661440',
    role: 'app-developer',
    email: 'Ibrahima.TALL@mtn.com',
    tags: {
        lang: 'en'
    },
    RoleIdMapping: ['app-developer']
}


Votre numero est ${$msisdn} et vous avez le profil ${sname}. MTN

Votre numero est $msisdn et vous avez le profil $sname .MTN