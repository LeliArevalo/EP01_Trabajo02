//  Área del triángulo

  var a, b, h;
  b = prompt ("Ingresa la base");
  h = prompt ("Ingresa la altura");
  a = (b * h)/2;
  console.log("El área del triángulo es: " + a);

// Área del círculo

  var r,a;
  var pi= Math.PI;

  r = prompt ("Ingresa el radio");
  a = (r * r * pi );
  console.log("El área del círculo es: " + a);

  // Área del cuadrado

  var a, b, h;
  b = prompt ("Ingresa la base");
  h = prompt ("Ingresa la altura");
  a = (b * h);
  console.log("El área del cuadrado es: " + a);

  // Vocales

  var vocal=[["a",0],["e",0],["i",0],["o",0],["u",0]];
  var palabra=prompt("Ingresa palabra");

  for (var j = 0; j < vocal.length; j++)
  {
    for(var i = 0; i < palabra.length; i++)
    {

      if (palabra.charAt(i) === vocal[j][0])
      {
        vocal[j][1]++;
      }
    }
  }
  for (var i = 0; i < vocal.length; i++)
  {
    if (vocal[i][1] != 0)
    {
      console.log(vocal [i][1]+ vocal[i][0]);
    }
  }

  // Consonantes

  var consonante=[["b",0],["c",0],["d",0],["f",0],["g",0],
            ["h",0], ["j",0], ["k",0], ["l",0], ["m",0],
            ["n",0],["ñ",0], ["p",0], ["q",0], ["r",0],
            ["s",0], ["t",0], ["v",0], ["w",0], ["x",0],
            ["y",0], ["z",0]];
  var palabra = prompt("Ingresa palabra");

  for (var j = 0; j < consonante.length; j++)
    {
      for (var i = 0; i < palabra.length; i++)
      {
    if (palabra.charAt(i) === consonante[j][0])
    {
        consonante[j][1]++;
    }
      }
   }
  for (var i = 0; i < consonante.length; i++)
    {
      if (consonante [i][1] != 0)
      {
        console.log(consonante[i][1] + consonante [i] [0]);
      }
    }

// Picua

var numero = prompt ("Ingrese un numero, para saber si es Capicua");

if (numero.length >= 4)
{
  for(i=0; i < numero.length/2; i++)
  {
	   if (numero[i]===numero[numero.length-1-i])
	    {
		      console.log("El numero ingresado es capicua");
	    }
	else
  { console.log("El numero ingresado no es capicua");}

  }
}
