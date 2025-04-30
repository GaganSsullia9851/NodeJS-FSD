function main() {
    try {
        let dynamic = {
            children: {
                items: [{
                    "id": "Title; ID: wdhqfw3463",
                    "uid": "wdhqfw3463",
                    "name": "Veuillez choisir le forfait a activer svp",
                    "type": "TITLE",
                    "update": false,
                    "enabled": true,
                    "children": {
                        "items": []
                    }
                }]
            }
        };
        let count = 0;
        for (let i = 0; i < $response.ocsResponse.services.service.length; i++) {
            let offerSubType = $response.ocsResponse.services.service[i].offerSubType;
            let offerId = $response.ocsResponse.services.service[i].offerId;

            console.log(" offerSubType " + offerSubType + " " + $response.ocsResponse.services.service[i].offerId);
            if (offerSubType.includes("DATA_BUNDLE_Widge")) {
                logger.trace("widge " + JSON.stringify($response.ocsResponse.services.service[i]));
                count++;
                let mid = Date.now();
                let menuProperty = {
                    "id": "Menu; Id: " + mid,
                    "uid": String(mid),
                    "name": $response.ocsResponse.services.service[i].offerName,
                    "volume": $response.ocsResponse.services.service[i].volume,
                    "volumeUnit": $response.ocsResponse.services.service[i].volumeUnit,
                    "type": "CHOICE",
                    "menuProperty": {
                        "0": {
                            "offerName": $response.ocsResponse.services.service[i].offerName,
                            "offerId": $response.ocsResponse.services.service[i].offerId,
                            "offerDetails": $response.ocsResponse.services.service[i],
                            "price": Math.round($response.ocsResponse.services.service[i].price),
                            "validity": $response.ocsResponse.services.service[i].offerValidity,
                            "option": i + 1
                        }
                    },
                    "update": false,
                    "children": {
                        "items": []
                    },
                    "enabled": true
                };
                dynamic.children.items.push(menuProperty);
            }
        }
        arrange(dynamic);

        let menuitems = dynamic.children.items;
        //let Pourcentagedec = $numberType.bonusPercentileMoMo[i]/100;
        for (var i = 0; i < menuitems.length; i++) {
            //console.log("Gagan====" + JSON.stringify(menuitems))

            /*
             menuitems[i].name = menuitems[i].volume + "MB - " + menuitems[i].menuProperty["0"].price + "F via MoMo - " + menuitems[i].menuProperty["0"].validity + "J";
            menuitems[i].menuProperty["0"].offerName = menuitems[i].name;
            menuitems[i].menuProperty["0"].option = i + 1;
            */


            menuitems[i].name = menuitems[i].volume + "MB - " + menuitems[i].menuProperty["0"].price + "F via MoMo - " + menuitems[i].menuProperty["0"].validity + "J";
            if (menuitems[i].menuProperty["0"].offerId == "36627") {
                menuitems[i].name = menuitems[i].volume + "MB a " + menuitems[i].menuProperty["0"].price + "F + Whatsapp txt GRATUIT";
            }
            menuitems[i].menuProperty["0"].offerName = menuitems[i].name;
            menuitems[i].menuProperty["0"].option = i + 1;


            console.log("Gagan1====" + JSON.stringify(menuitems[i].name))
            console.log("Gagan2====" + JSON.stringify(menuitems[i].menuProperty["0"].offerName))
            console.log("Gagan3====" + JSON.stringify(menuitems[i].menuProperty["0"].option))
            //}
        }

        setVariable('mainmenu', dynamic);
        console.log("HI: " + dynamic);

        if (count == 0) {
            setResponseCode('E1004');
            return "a1ee934";
        }
        return "df188e5";

    }
    catch (e) {
        console.log(e);
    }
    return "a1ee934";
}

function arrange(dynamic) {
    let items = dynamic.children.items;
    let temp;
    for (var i = 0; i < items.length - 1; i++) {
        for (var j = i + 1; j < items.length; j++) {
            if (Number(items[i].menuProperty["0"].price) > Number(items[j].menuProperty["0"].price)) {
                temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }
        }
    }
}