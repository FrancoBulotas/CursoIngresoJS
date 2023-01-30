function mostrar()
{ 
  var tipos;
  var cantidadDeBolsas;
  var precioPorBolsaCal;
  var precioPorBolsaArena;
  var precioPorBolsaCemento;
  var respuesta;
  var acumuladorDeBolsas;
  var precioTotal;
  var descuento;
  var precioConDescuento;

  acumuladorDeBolsas=0
  precioPorBolsaCal=0
  precioPorBolsaArena=0
  precioPorBolsaCemento=0

  respuesta=prompt("Desea comprar? S/N")

  while(respuesta=="S"){
    tipos=prompt("Elija un producto para agregar a su lista: (cal $120 - arena $145 - cemento $200)")

    while(tipos!="cal" && tipos!="cemento" && tipos!="arena"){
      tipos=prompt("Error, elija otro producto: ")
    }
    
    cantidadDeBolsas=prompt("Que cantidad de bolsas de "+tipos+" va a querer")
    cantidadDeBolsas=parseInt(cantidadDeBolsas)

    while(cantidadDeBolsas<1){
      cantidadDeBolsas=prompt("Error, el numero debe ser mayor o igual a 1, que cantidad de bolsas va a querer")
      cantidadDeBolsas=parseInt(cantidadDeBolsas)
    }

    if(tipos=="cal"){
      precioPorBolsaCal=cantidadDeBolsas*120
    }else if(tipos=="arena"){
      precioPorBolsaArena=cantidadDeBolsas*145
    }else if(tipos=="cemento"){
      precioPorBolsaCemento=cantidadDeBolsas*200
    }

    acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas


    respuesta=prompt("Desea seguir? S/N")
  }
precioTotal=precioPorBolsaArena+precioPorBolsaCal+precioPorBolsaCemento

if(acumuladorDeBolsas>10 && acumuladorDeBolsas<=30){
  descuento=precioTotal*0.15
  precioConDescuento=precioTotal-descuento
  alert("La cantidad de bolsas que esta llevando es de "+acumuladorDeBolsas+" y el precio total bruto es de $" + precioTotal+
        ", pero al llevar mas de 10 bolsas tiene un 15% de descuento, por lo que el total es $"+precioConDescuento)
}
else if(acumuladorDeBolsas>30){
  descuento=precioTotal*0.25
  precioConDescuento=precioTotal-descuento
  alert("La cantidad de bolsas que esta llevando es de "+acumuladorDeBolsas+" y el precio total bruto es de $" + precioTotal+
        ", pero al llevar mas de 10 bolsas tiene un 25% de descuento, por lo que el total es $"+precioConDescuento)
}
else if(acumuladorDeBolsas<=10){
  alert("La cantidad de bolsas que esta llevando es de "+acumuladorDeBolsas+" y el precio total bruto es de $" + precioTotal)
}
}

