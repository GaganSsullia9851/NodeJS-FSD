if ($service.toUpperCase() == "DATA") {
    setVariable('message', "Cher abonné! Le " + $Anumber + " vous a active le " + $multiplier + "MB qui expire le " + _date2customformat($response.endDate, 'dd-mm-yyyy  HH:MM:ss') + ". Tapez *555*25# ok");
  } else if ($service.toUpperCase() == "VOICE") {
    setVariable('message', "Cher abonné! Le " + $Anumber + " vous a active le forfait de " + $multiplier + "min qui expire le " + _date2customformat($response.endDate, 'dd-mm-yyyy  HH:MM:ss') + ". Tapez *555*24# ok");
  }

  if ($service.toUpperCase() == "DATA") {
    setVariable('message', "Cher abonné! Le " + $Anumber + " vous a active le " + $multiplier + "MB qui expire le " + _date2customformat($response.msg.endDate, 'dd-mm-yyyy  HH:MM:ss') + ". Tapez *555*25# ok");
  } else if ($service.toUpperCase() == "VOICE") {
    setVariable('message', "Cher abonné! Le " + $Anumber + " vous a active le forfait de " + $multiplier + "min qui expire le " + _date2customformat($response.msg.endDate, 'dd-mm-yyyy  HH:MM:ss') + ". Tapez *555*24# ok");
  }

Bravo! Vous avez active XXMN a XXXF au XXXXXXXXX avec succes. Offres valable XXJr.Profitez des meilleures offres avec le #RESEAU CHARISMATIQUE.

Bravo! Vous avez active XXMB a XXXF au XXXXXXXXX avec succes. Offres 
valable XXJr.Profitez des meilleures offres avec le#RESEAU CHARISMATIQUE.


let date=_date2customformat($response.msg.endDate, 'dd-mm-yyyy  HH:MM:ss')
if ($service.toUpperCase() == "DATA") {
    setVariable('message', `Bravo! Vous avez active ${$multiplier} MB a ${$price} F au ${$tempMSISDN} avec succes. Offres valable ${date}Jr.Profitez des meilleures offres avec le#RESEAU CHARISMATIQUE.`);
  } else if ($service.toUpperCase() == "VOICE") {
    setVariable('message', `Bravo! Vous avez active ${$multiplier} MN a ${$price} F au ${$tempMSISDN} avec succes. Offres valable ${date}Jr.Profitez des meilleures offres avec le #RESEAU CHARISMATIQUE.`);
  }

Anumber
tempMSISDN