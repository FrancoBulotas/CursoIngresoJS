/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marca;
    var precioDescuento;
    var precioInicial;
    var mensaje;
    var precioTotalDescuento;
    var precioConImpuesto;


    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;

    precioInicial = 35;        

    // Punto A
    if(cantidadLamparas >= 6){
        precioDescuento = precioInicial * 0.5;
        mensaje = "Precio final con 50% de descuento $";
        precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
        txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
    }
    else{
        //Punto B
        if(cantidadLamparas == 5 && marca == "ArgentinaLuz"){
            precioDescuento = precioInicial * 0.6;
            mensaje = "Precio final con 40% de descuento $";
            precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
            txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
        }
        else if(cantidadLamparas == 5 && marca != "Argentina Luz"){
            precioDescuento = precioInicial * 0.7;
            mensaje = "Precio final con 30% de descuento $";
            precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
            txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
        }
        else{
            //Punto C   
            if(cantidadLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
                precioDescuento = precioInicial * 0.75;
                mensaje = "Precio final con 25% de descuento $";
                precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
                txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
            }
            else if(cantidadLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
                precioDescuento = precioInicial * 0.8;
                mensaje = "Precio final con 20% de descuento $";
                precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
                txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
            }
            else{
                    //Punto D 
                    if(cantidadLamparas == 3 && marca == "ArgentinaLuz"){
                        precioDescuento = precioInicial * 0.85;
                        mensaje = "Precio final con 15% de descuento $";
                        precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
                        txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
                    }
                    else if(cantidadLamparas == 3 && marca == "FelipeLamparas"){
                        precioDescuento = precioInicial * 0.90;
                        mensaje = "Precio final con 10% de descuento $";
                        precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
                        txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
                    }
                    else if(cantidadLamparas == 3 && (marca != "ArgentinaLuz" || marca == "FelipeLamparas")){
                        precioDescuento = precioInicial * 0.95;
                        mensaje = "Precio final con 5% de descuento $";
                        precioTotalDescuento = parseFloat(precioDescuento * cantidadLamparas).toFixed(2)
                        txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
                    }
                    else{
                        mensaje = "Precio final $";
                        precioTotalDescuento = parseFloat(precioInicial * cantidadLamparas).toFixed(2)
                        txtIdprecioDescuento.value = mensaje + precioTotalDescuento;
                    }
                }
            }   
        }       
        //Punto E
        if(precioTotalDescuento > 120){
            precioConImpuesto = precioTotalDescuento * 1.10;
            alert("IIBB Usted pagó un 10% de ingresos brutos por lo que el total es $" + precioConImpuesto.toFixed(2));
        }
}
