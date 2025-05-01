// $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"])
// $response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseMessage"]

function main() {
    try {
        if ($response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"] == "0") {
            setVariable('status', 'Success');
            setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM est traitee. Veuillez inserer la nouvelle carte SIM dans 5 minutes.');
            sendImmediateResponse('E2000');
            return "2d1b576";
        } else if ($response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"] == "SIMC-068") {
            setVariable('responseMessage', 'Veuillez noter que le service de remplacement SIM en libre-service nest pas disponible de 20h00 a 08h00');
            sendImmediateResponse('E2000');
        } else {
            setVariable('responseMessage', 'Cher client, votre demande de remplacement de la carte SIM n’est pas traitée. Veuillez reessayer ou contacter notre service client via WhatsApp au 067000123 ou le point de service MTN le plus proche. Merci.');
            sendImmediateResponse('E2000');
        }
        setVariable('status', 'Failed');
        return "2d1b576";
    } catch (err) {
        if ($response["soapenv:Envelope"]["soapenv:Body"]["com:clientRequestResponse"].EaiEnvelope.Payload["ser:Services"]["ser:ResponseCode"] == "118") {
            setVariable('status', 'Failed');
            sendImmediateResponse('E105');
            return "2d1b576";
        }

        logger.error("AID:11632590776458 | MID: cab0294 | MSISDN:" + $MSISDN + " " + err);
    }
    setResponseCode('E9000');
    return "45d174b";
}