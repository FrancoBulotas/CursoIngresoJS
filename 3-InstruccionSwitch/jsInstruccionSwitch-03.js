function mostrar()
{
	var mesDelAño =txtIdMes.value;	

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 dias o mas");
	}	
}