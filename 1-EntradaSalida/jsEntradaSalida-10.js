/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;

	importe=parseInt(txtIdImporte.value);
	descuento=parseInt(importe*0.25);

	txtIdResultado.value=importe-descuento;

}
