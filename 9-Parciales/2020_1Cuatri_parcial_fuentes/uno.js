
function mostrar()
{
	var producto;
	var productoPrecio;
	var productoCantidad;
	var productoMarca;
	var productoFabricante;
	var jabonesTotales = 0;
	var barbijosTotales = 0;
	var alcoholesTotales = 0;
	var i = 0;
	var valorJabones = 0;
	var valorJabonesTotal = 0;
	var valorBarbijos = 0;
	var valorBarbijosTotal = 0;
	var valorAlcoholes = 0;
	var valorAlcoholesTotal = 0;
	var promedioCompra = 0;
	var tipoMasUnidades = "";
	var alcoholDescripcion = [];
	var listaAlcoholes = [];
	var listaValorAlcoholes = [];
	var menorValorAlcohol = 0;
	var alcoholUnidades = 0;
	var alcoholFabricante = "";


	while(i < 5){
		// Ingresamos el producto
		producto = prompt("Cargue un producto para la prevención de contagios ");

		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
			producto = prompt("Error, ese producto no esta disponible, cargue otro producto para la prevención de contagios ");
		}

		// Ingresamos el precio del producto
		productoPrecio = prompt("Ingrese el precio del producto ");
		productoPrecio = parseInt(productoPrecio);

		while(productoPrecio < 100 || productoPrecio > 300){
			productoPrecio = prompt("Error, ingrese el precio nuevamente ");
			productoPrecio = parseInt(productoPrecio);
		}

		// Ingresamos la cantidad el producto

		productoCantidad = prompt("Ingrese la cantidad del producto ");
		productoCantidad = parseInt(productoCantidad);

		while(productoCantidad < 0 || productoCantidad > 1000){
			productoCantidad = prompt("Error, ingrese la cantidad del producto nuevamente");
			productoCantidad = parseInt(productoCantidad);
		}

		// Ingresamos la marca del producto

		productoMarca = prompt("Ingrese la marca del producto ")


		// Ingresamos el fabricante del producto

		productoFabricante = prompt("Ingrese el fabricante del producto ")
	
		// Unidades de jabon en total 

		if(producto == "jabon"){
			jabonesTotales = parseInt(jabonesTotales);
			jabonesTotales = jabonesTotales + productoCantidad;
			valorJabones = productoCantidad * productoPrecio;
			valorJabonesTotal = valorJabonesTotal + valorJabones;
		}
		
		// Unidades de barbijo en total

		if(producto == "barbijo"){
			barbijosTotales = parseInt(barbijosTotales);
			barbijosTotales = barbijosTotales + productoCantidad;
			valorBarbijos = productoCantidad * productoPrecio;
			valorBarbijosTotal = valorBarbijosTotal + valorBarbijos;
		}

		// Unidades de alcohol en total

		alcoholDescripcion = [];

		if(producto == "alcohol"){
			alcoholesTotales = parseInt(alcoholesTotales);
			alcoholesTotales = alcoholesTotales + productoCantidad;
			valorAlcoholes = productoCantidad * productoPrecio;
			valorAlcoholesTotal = valorAlcoholesTotal + valorAlcoholes;
			
			listaValorAlcoholes.push(productoPrecio);

			alcoholDescripcion.push(productoPrecio);
			alcoholDescripcion.push(productoCantidad);
			alcoholDescripcion.push(productoFabricante);

			listaAlcoholes.push(alcoholDescripcion);
		}

		i++;
	}

	// Del alcohol mas barato devuelvo unidades y fabricante

	menorValorAlcohol = Math.min(...listaValorAlcoholes);
	menorValorAlcohol = parseInt(menorValorAlcohol);

	for(i = 0 ; i < listaAlcoholes.length ; i++){
		if(menorValorAlcohol == listaAlcoholes[i][0]){
			alcoholUnidades = listaAlcoholes[i][1];
			alcoholFabricante = listaAlcoholes[i][2];
		}
	}


	// Promedio por compra del tipo con mas unidades

	if (jabonesTotales > barbijosTotales && jabonesTotales > alcoholesTotales){
		promedioCompra = valorJabonesTotal / jabonesTotales;
		tipoMasUnidades = "Jabon";
	} 
	else if (barbijosTotales > jabonesTotales && barbijosTotales > alcoholesTotales){
		promedioCompra = valorBarbijosTotal / barbijosTotales;
		tipoMasUnidades = "Barbijo";
	}
	else if(alcoholesTotales > jabonesTotales && alcoholesTotales > barbijosTotales){
		promedioCompra = valorAlcoholesTotal / alcoholesTotales;
		tipoMasUnidades = "Alcohol";
	}

	alert(menorValorAlcohol);
	alert("Del mas barato de los alcoholes, la cantidad de unidades es " + alcoholUnidades + ", y el fabricante es " + alcoholFabricante);
	alert("El tipo de producto con mas unidades es " + tipoMasUnidades + ", y el promedio por compra es " + promedioCompra.toFixed(2));
	alert("La cantidad de jabones que hay en total es " + jabonesTotales);
}
