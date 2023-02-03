/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var gradosFahrenheit;

    gradosFahrenheit = parseInt(txtIdTemperatura.value);

    alert(gradosFahrenheit + " Fahrenheit son " + ((gradosFahrenheit - 32)*5/9).toFixed(2) +" celsius")
}

function CentigradosFahrenheit () 
{
	var gradosCelsius;

    gradosCelsius = parseInt(txtIdTemperatura.value);

    alert(gradosCelsius + " Celsius son " + ((gradosCelsius * 9/5)+ 32).toFixed(2) +" Fahrenheit")
}
