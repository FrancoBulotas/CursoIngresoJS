/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porciento;

	sueldo=parseInt(txtIdSueldo.value);
	porciento=parseInt(sueldo*0.1);
	txtIdResultado.value=sueldo+porciento;
	
}
