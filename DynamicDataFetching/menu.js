// Custom code panel
// main function is the default method executed after processing current module
function main() {
    try {
        console.error("Shreyas ===Inside menu output")
        console.error("Shreyas1==============111727894569038, MID=df188e5" + JSON.stringify($response))
        console.error("Shreyas2===mainmenu===========111727894569038, MID=df188e5" + JSON.stringify($mainmenu))
        let serviceList = $mainmenu.children.items[$subscriberInput - 1].menuProperty[0].offerDetails;
        setVariable('offerName', $mainmenu.children.items[$subscriberInput - 1].menuProperty[0].offerName);
        setVariable("offerID", $mainmenu.children.items[$subscriberInput - 1].menuProperty[0].offerId);

        let option = $mainmenu.children.items[$subscriberInput - 1].menuProperty[0].option;
        setVariable("option", option);
        setVariable('service', serviceList);
        setVariable('bonus', serviceList.bonus);
        setVariable('refillProfileID', serviceList.refillProfileID);
        setVariable('maxSubscription', serviceList.maxSubscriptionThreshold);
        setVariable('uaid', serviceList.uaidMaxSubscription);
        setVariable('maxBundelInCategory', serviceList.maxBundelInCategory);
        setVariable('uaidCategory', serviceList.uaidCategory);
        setVariable('offerValidity', serviceList.offerValidity);
        setVariable('uaidDiscount', serviceList.uaidDiscount);
        setVariable('discountThreshold', serviceList.discountThreshold);
        setVariable('refillProfileID', serviceList.refillProfileID);
        //setVariable('offerName', serviceList.offerName);
        setVariable('validityUnit', serviceList.validityUnit);
        setVariable('momoRefillProfileID', serviceList.externalData3);
        setVariable('externalData1', serviceList.externalData1);
        setVariable('externalData2', serviceList.externalData2);
        setVariable('externalData3', serviceList.externalData3);
        setVariable('externalData4', serviceList.externalData4);
        setVariable('externalData4Airtime', Number($numberType.bonusPercentileAirtime[$subscriberInput - 1]));
        setVariable('externalData4MoMo', String($numberType.bonusPercentileMoMo[$subscriberInput - 1]));
        setVariable('volume', serviceList.volume);
        setVariable('volumeUnit', serviceList.volumeUnit);
        setVariable('txnAmt', Number(serviceList.volume));
        /*if(option == 1){
          setVariable('externalData4', '0');
        }else if(option == 2 || option == 3){
          setVariable('externalData4', '500');
        }else{
          setVariable('externalData4', serviceList.externalData4);
        }*/

        setVariable('bonusVolumeAirtime', ((100 / 100) * Number(serviceList.externalData3)));
        setVariable('bonusVolumeMoMo', ((100 / 100) * Number(serviceList.volume)));
        console.error("Shreyas======Menu, MID: df188e5==========")
        return "b7c929e";
    } catch (err) {
        logger.error("AID:111649238952825 | MID:df188e5 | MSISDN:" + $MSISDN + " " + err);
    }
    return "a1ee934";// return end moduleId
}