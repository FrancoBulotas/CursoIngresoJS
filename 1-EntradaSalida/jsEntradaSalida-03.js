/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// var nombreIngresado;
	// nombreIngresado=txtIdNombre.value;
	// alert(nombreIngresado);

	//Integrador 4

	var altura;
	var edad;

	altura = prompt("Cual es su altura?");

	if(altura < 120){
		alert("No puede subirse a la montaña rusa");
	}else{
		edad = prompt("Cual es su edad?");
		if(edad < 18 || edad >= 80){
			alert("El precio es $200");
		}else if(edad >= 18 || edad < 80){
			alert("El precio es $400");
		}
	}
}


