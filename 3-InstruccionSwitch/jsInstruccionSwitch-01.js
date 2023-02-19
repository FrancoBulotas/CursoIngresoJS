function mostrar()
{
	var mesDelAnio = txtIdMes.value;

	
	switch(mesDelAnio)
	{
		case "Enero":
			alert("Que comiences bien el año!!");
			break;
		case "Marzo":
			alert("A clases!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!");
			break;
		default:
			alert("No es ninguno de los demas");
	}
}

if(mesDelAnio == "Enero")
	{
		alert("Que comiences bien el año!!");
	}
	else if(mesDelAnio == "Marzo")
	{
		alert("A clases!!");
	}
	else if(mesDelAnio == "Julio"){
		alert("Se vienen las vacaciones!!");
	}
	else if(mesDelAnio == "Diciembre")
	{
		alert("Felices fiestas!!");
	}