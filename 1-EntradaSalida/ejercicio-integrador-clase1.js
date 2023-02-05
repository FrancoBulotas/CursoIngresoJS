
function mostrar()
{
    var compraMayorista;
    var descuentoCompraMayorista;
    var iva;
    var importeConIva;
    var descuentoTotal; 

    compraMayorista = parseInt(txtIdNombre.value);

    importeConIva = compraMayorista * 1.21;

    iva = importeConIva - compraMayorista;

    descuentoCompraMayorista = importeConIva * 0.05;

    descuentoTotal = importeConIva - descuentoCompraMayorista;

    alert("El importe bruto es $" + compraMayorista + ", el iva es $" + iva + ", el importe con iva es $" +
             importeConIva + ", el valor del descuento es $" + descuentoTotal + ", y el total a pagar es $" + descuentoCompraMayorista);
}





/* function mostrar()
{
    var dni;
    var fecha;
    var razonSocial;
    var nombreTitular;

    dni = dniTitular.value;
    fecha = fechaInicio.value;

    razonSocial = prompt("Cual es la razon social de la empresa?");
    nombreTitular = prompt("Cual es el nombre del titular?");

    alert("El nombre del titular es "+ nombreTitular +", el DNI es "+ dni +", la fecha de inicio es "+
          fecha +", la razon social es "+ razonSocial +
          ", y el CUIT de la empresa es 30-"+ dni +"-"+ Math.floor(Math.random() * 9));
} /*

//Realizado por Franco Thiago Bulotas, DIV F, grupo 2