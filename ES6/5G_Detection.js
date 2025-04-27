function main() {
    try {
        let responseObj = _xml2json($response.msg);
        setVariable('imeiok', responseObj.subscriber.imei);
        if (responseObj.subscriber.device.hasOwnProperty("model")) {
            if (responseObj.subscriber.device.has_5g != null && responseObj.subscriber.device.has_5g !== undefined && responseObj.subscriber.device.lte != null && responseObj.subscriber.device.lte !== undefined) {
                let has_5G = responseObj.subscriber.device.has_5g
                let lte = responseObj.subscriber.device.lte
                setVariable("has_5g", responseObj.subscriber.device.has_5g);
                setVariable("lte", responseObj.subscriber.device.lte);
                if (has_5G === "Yes" && lte === "Yes") {
                    return "e96408d"
                } else {
                    setResponseCode("S501")
                    return "a1ee934"
                }
            }
        } else {
            setResponseCode("E200");
            return "a1ee934";
        }
    } catch (e) {
        console.log(e)
    }
    setResponseCode("E200");
    return "a1ee934";
}