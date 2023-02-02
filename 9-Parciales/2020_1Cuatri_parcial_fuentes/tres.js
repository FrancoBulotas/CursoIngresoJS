function mostrar()
{	
	var personasTotalesEnAvion=[];
	var personaActual=[];
	var mayoresViudos=0;
	var hombresViudos=0;
	var hombresSolteros=0;
	var tercerEdadTemp=0;

	respuesta=prompt("Desea ingresar datos? S/N");

	while(respuesta=="S"){
		nombre=prompt("Cual es tu nombre?");
		personaActual.push(nombre);
		

		edad=prompt("Cual es tu edad?");
		parseInt(edad);
		personaActual.push(edad);


		sexo=prompt("Masculino o femenino? M/F ");
		while(sexo!="M" && sexo!="F"){
			sexo=prompt("Error. Masculino o femenino? M/F ");
		}
		personaActual.push(sexo);


		estadoCivil=prompt("Cual es tu estado civil?");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo" && estadoCivil!="soltera" && estadoCivil!="casada" && estadoCivil!="viuda"){
			estadoCivil=prompt("Error. Cual es tu estado civil?");
		}
		if((estadoCivil=="viudo" || estadoCivil=="viuda") && edad > 18){
			mayoresViudos=mayoresViudos + 1;
		}
		if(estadoCivil=="viudo"){
			hombresViudos=hombresViudos+1;
		}
		if(estadoCivil=="soltero"){
			hombresSolteros=hombresSolteros+1;
		}
		personaActual.push(estadoCivil);


		temperatura=prompt("Cual es tu temperatura?");
		parseInt(temperatura);
		personaActual.push(temperatura)


		if(edad > 60 && temperatura > 38){
			tercerEdadTemp=tercerEdadTemp+1;
		}


		personasTotalesEnAvion.push(personaActual)

		respuesta=prompt("Hay mas pasajeros? S/N")
	}
	alert(personasTotalesEnAvion);
	alert("La cantidad de mayores de edad que estan viudos es de: "+mayoresViudos);
	alert("La cantidad de hombres que estan solteros es de: "+hombresSolteros+", y la cantidad de hombres viudos: "+hombresViudos)
	alert("La cantidad de personas de tercera edad (mas de 60) que tienen mas de 38 de temp es de: "+tercerEdadTemp)

}
