function sumar(){
    let n1, n2, suma;
    alert("este algoritmo suma dos numeros ingresados por el usuario");
    n1= parseFloat(prompt("ingrese el primer numero "));
    n2=parseFloat(prompt("ingrese segundo valor "));

    suma= n1 + n2;
    alert("el resultado de la suma es: " + suma);
}

function operacionesBasicas(){
    let n1, n2, suma, resta, multiplicacion, division;
    alert("este algoritmo ejecuta la operacion que elija de dos numeros ingresados por el usuario");
    n1= parseFloat(prompt("ingrese el primer numero"));
    n2= parseFloat(prompt("ingrese el segundo numero"));

    suma= n1 + n2;
    resta= n1 - n2;
    multiplicacion= n1 * n2;
    division= n1 / n2;

    alert("el resultado de la suma es: " + suma);
    alert("el resultado de la resta es: " + resta);
    alert("el resultado de la multiplicacion es: " + multiplicacion);
    alert("el resultado de la division es: " + division);
}
 function conversionUnidades (){
    let n1, metros, milimetros;

    alert("este algoritmo convierte la unidad de centimetros a metros y milimetros ");

    n1= parseFloat(prompt("ingrese el valor en centimetros"));

    metros = n1/100
    milimetros = n1 * 10

    alert("el resultado de la conversion en metros es: " + metros);
    alert("el resultado de la conversion en milimetros es: " + milimetros);

 }

 function conversionGrados(){

    let n1, f, k;
    
    alert("este algoritmo convierte grados fire heart a a un valor en selcios ");

    n1= parseFloat(prompt("ingrese el valor en grados fire heart"));


    f = (n1*1.8) + 32
    k = (n1 + 273.15)

    alert("el resultado de la conversion en grados fire heart es: " + f);
    alert("el resultado de la conversion en grados selcios es: " + k);
 }
 
 function areaRectangulo(){

let u, b, a, p;

alert("este algoritmo determina el area de un rectangulo  ");

b= parseFloat(prompt("ingrese el valor de la base"));
a= parseFloat(prompt("ingrese el valor de la altura"));



    alert("el resultado en area es: " + u);
    alert("el resultado en perimetro es: " + p);

 }

function promedio3Notas(){

let n1, n2, n3, promedio;    

alert("este algoritmo determina la suma y el promdio de 3 notas ");

n1= parseFloat(prompt("ingrese la primera nota"));
n2= parseFloat(prompt("ingrese la segunda nota"));
n3= parseFloat(prompt("ingrese la tercera nota"));

promedio = (n1+ n2+ n3) / 3

alert("el promedio de la 3 notas es: " + promedio);


}

function conversionTiempo(){

    let s, m, h;    

alert("este algoritmo determina la conversion de segundos a minutos y horas ");

s= parseFloat(prompt("ingrese la cantidad de segundos"));

m = s / 60
h = m / 3600

alert("el resultado en minutos es: " + m);
alert("el resultado en horas es: " + h);

}


function conversionPeso(){

let k, g, l, t;

alert("este algoritmo determina la equivalencia de cada uno en kg, g, l, t");

k= parseFloat(prompt("ingrese el valor"));

g= k * 1000
l= k * 2.20462
t= k / 1000

alert("el peso en k en gramos es: " + g);
alert("el peso en k en libras es: " + l);
alert("el peso en k en toneladas es: " + t);

}

function pesoLunaOtrosPlanetas(){


let pt, pl, pm, pv, pma, pj, ps, pu, pn;

alert("este algoritmo determina el peso de una persona en la luna y en los otros planetas segun su peso en la tierra");

pt= parseFloat(prompt("ingrese su peso"));

pl= (pt * 1.62)/9.8
pm= (pt * 3.7)/9.8
pv= (pt * 8.87)/9.8
pma= (pt * 3.71)/9.8
pj= (pt * 24.79)/9.8
ps= (pt * 10.44)/9.8
pu= (pt * 8.69)/9.8
pn= (pt * 11.15)/9.8

alert("su peso en la luna es: " + pl);
alert("su peso en mercuerio es : " + pm);
alert("su peso en venus es: " + pv);
alert("su peso en marte es: " + pma);
alert("su peso en jupiter es: " + pj);
alert("su peso en saturno es: " + ps);
alert("su peso en urano es: " + pu);
alert("su peso en neptuno es: " + pn);


}

function calculoCompra(){

let p1, p2, p3, c1, c2, c3, sub1, sub2, sub3, total;

alert("este algoritmo calcula la compra que realizo");

p1= parseFloat(prompt("ingrese el primer valor"));
c1= parseFloat(prompt("ingrese la cantidad del primer valor"));

p2= parseFloat(prompt("ingrese el segundo valor"));
c2= parseFloat(prompt("ingrese la cantidad del segundo valor"));

p3= parseFloat(prompt("ingrese el tercer valor"));
c3= parseFloat(prompt("ingrese la cantidad del tercer valor"));


sub1= p1 * c1
sub2= p2 * c2
sub3= p3 * c3
total= sub1 + sub2 + sub3

alert("subtotal de cada producto es: " + sub1, sub2, sub3);
alert("valor total acumulado de la compra es: " + total);

 
}

function calculoSalario(){

let sb, dt, b, pd, tp;

alert("este algoritmo calcula el salario de un empleado");

sb= parseFloat(prompt("ingrese el primer valor"));
dt= parseFloat(prompt("ingrese el segundo valor"));

pd= (sb/30) * dt
tp= pd * b

alert(" el valor total a pagar al trabajador es: " + pd + tp);

}


function facturaServicio(){

let c, vu, pi, st, vi, tp;

alert("este algoritmo determina la factura de un servicio ");

c= parseFloat(prompt("ingrese el primer valor"));
vu= parseFloat(prompt("ingrese el segundo valor"));
pi=parseFloat(prompt(" ingese el tercer valor"));

sb= c * vu
vi= sb * (pi/100)
tp= sb + vi

alert(" el valor total a pagar es: "  + tp );


}

function costoViajeVehiculo(){

let d, r, pg, gu, ct;

alert("este algoritmo determina el costo de un viaje en vehiculo");

d= parseFloat(prompt("ingrese el primer valor"));
r= parseFloat(prompt("ingrese el segundo valor"));
pg=parseFloat(prompt(" ingrese el tercer valor"));

gu= d/r
ct= gu * pg

alert(" el costo total del viaje en vehiculo es de: "  + ct );

}

function calculoViaje(){

let d, v, th, h;

alert("este algoritmo calcula el tiempo de un viaje en vihiculo");

d= parseFloat(prompt("ingrese el primer valor"));
v= parseFloat(prompt("ingrese el segundo valor"));

th= d/v

alert(" el tiempo estimado del viaje es: "  + th );


}

function sistemaNotas(){

let nota1, nota2, nota3, punto1, punto2, punto3, porcentaje1, porcentaje2, porcentaje3, nf;

alert("este algoritmo determina la nota final del estudiante");

nota1= parseFloat(prompt("ingrese la primera nota"));
porcentaje1= parseFloat(prompt("ingrese el porcentaje de la primera nota"));
punto1= parseFloat(prompt("ingrese el punto 1"));

nota2= parseFloat(prompt("ingrese la segunda nota"));
porcentaje2= parseFloat(prompt("ingrese el porcentaje de la segunda nota"));
punto2= parseFloat(prompt("ingrese el punto 2"));

nota3= parseFloat(prompt("ingrese la tercera nota "));
porcentaje3= parseFloat(prompt("ingrese el porcentaje de la tercera nota "));
punto3= parseFloat(prompt("ingrese el punto 3 "));

punto1= nota1 * (porcentaje1/100)
punto2= nota2 * (porcentaje2/100)
punto3= nota3 * (porcentaje3/100)
nf = punto1 + punto2 + punto3

alert(" la nota final del estudiante es: " + nf);

}

function conversionMonedas(){

let pesoscop, tasadolar, tasaeuro, dolares, euros, usd, eur;

alert("este algoritmo determina el equivalente de pesos en dolares y euros");

pesoscop= parseFloat(prompt("ingrese el valor en cop"));
tasadolar= parseFloat(prompt("ingrese tasa dolar"));
tasaeuro= parseFloat(prompt("ingrese tasa euro"));

dolares= pesoscop/tasadolar
euros= pesoscop/tasaeuro

alert(" equivalente en dolares es: " + dolares );
alert(" la nota final del estudiante es: " + euros );


}











