let data = require('./data.js');

function UserData() {
    //console.log(data)
    let userDataInformation = [];
    let userData = data
    if (userData && Array.isArray(userData)) {
        userData.forEach((value) => {
            userDataInformation.push({
                MSISDN: value.MSISDN,
                BUNDLE_OFFERID: value.BUNDLE_OFFERID,
                BUNDLE_NAME: value.BUNDLE_NAME,
                BUNDLE_PRICE: value.BUNDLE_PRICE,
                EXPIRY_DATE: value.EXPIRY_DATE,
                BUNDLE_ACTIVATION_DATE: value.BUNDLE_ACTIVATION_DATE,
                HASH_KEY: value.HASH_KEY

            })
        })
        console.log("Data",userDataInformation)
    }
}
UserData()