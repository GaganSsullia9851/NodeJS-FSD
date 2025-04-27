function main() {
    try {
        if ($response.responseCode == '0') {
            let sname;
            if ($response.serviceClassCurrent) {
                let sc = $response.serviceClassCurrent;
                setVariable('ServiceClass', sc);

                for (let key in $numberType) {
                    if (key == sc) {
                        sname = $numberType[key];
                        setVariable("sname", sname);
                        break;
                    }
                }
                setResponseCode('S500');
                return "8dd0287";
            }
        }
    } catch (e) {
        console.log(e);
    }
    setResponseCode('E203');
    return "8dd0287";
}

Your MSISDN is $msisdn, service class number is $ServiceClass, and name is $sname    

Votre numero est $msisdn et vous avez le profil $service class Id appelé  $service class name

Votre numero est $msisdn et vous avez le profil $ServiceClass class Id appelé  $sname class name

"Votre numero est $msisdn et vous avez le profil $ServiceClass appelé  $sname. MTN"

Votre numero est $msisdn et vous avez le profil $sname.MTN

Votre numero est $number et vous avez le profil $serviceclassname. MTN

` "Votre numero est ${$msisdn} et vous avez le profil ${$sname}. MTN" `

Votre numero est $number et vous avez le profil $serviceclassname. MTN"