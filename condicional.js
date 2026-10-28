function verificar1() {
    let edad = Number(prompt("Ingrese su edad para verificar si es mayor de edad:"));
    if (edad >= 18) {
        alert("Es mayor de edad.");
    } else {
        alert("Es menor de edad.");
    }
}

function verificar2() {
    let nota = Number(prompt("Ingrese la nota final del estudiante (de 0 a 5):"));
    if (nota >= 3.0) {
        alert("¡Estudiante aprobado!");
    } else {
        alert("Estudiante reprobado.");
    }
}

function verificar3() {
    let numero = Number(prompt("Ingrese un número entero para verificar si es par o impar:"));
    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

function verificar4() {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    if (num1 > num2) {
        alert("El número mayor es: " + num1);
    } else if (num2 > num1) {
        alert("El número mayor es: " + num2);
    } else {
        alert("Ambos números son iguales.");
    }
}

function verificar5() {
    let a = Number(prompt("Ingrese el primer número:"));
    let b = Number(prompt("Ingrese el segundo número:"));
    let c = Number(prompt("Ingrese el tercer número:"));
    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;
    alert("El número mayor entre los tres es: " + mayor);
}

function verificar6() {
    let edad = Number(prompt("Ingrese su edad para saber su etapa de vida:"));
    if (edad < 12) {
        alert("Es un niño/a.");
    } else if (edad < 18) {
        alert("Es un adolescente.");
    } else if (edad < 60) {
        alert("Es un adulto/a.");
    } else {
        alert("Es un adulto mayor.");
    }
}

function verificar7() {
    let dia = prompt("Ingrese el día de la semana (ej. Lunes, Martes...):").toLowerCase();
    if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
        alert("¡Es fin de semana!");
    } else {
        alert("Es un día hábil de semana.");
    }
}

function verificar8() {
    let compra = Number(prompt("Ingrese el valor total de la compra:"));
    if (compra > 100000) {
        let descuento = compra * 0.10;
        let total = compra - descuento;
        alert("Tiene un 10% de descuento. El total a pagar es: $" + total);
    } else {
        alert("No aplica descuento. El total a pagar es: $" + compra);
    }
}

function verificar9() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let clave = prompt("Ingrese su contraseña:");
    if (usuario === "admin" && clave === "1234") {
        alert("¡Acceso concedido! Bienvenida.");
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function verificar10() {
    let mes = prompt("Ingrese el nombre del mes (ej. Enero, Diciembre...):").toLowerCase();
    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        alert("La estación correspondiente es Invierno / Época de vacaciones.");
    } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        alert("La estación correspondiente es Primavera.");
    } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        alert("La estación correspondiente es Verano.");
    } else {
        alert("La estación correspondiente es Otoño.");
    }
}

function verificar11() {
    let numero = Number(prompt("Ingrese un número para verificar si es positivo, negativo o cero:"));
    if (numero > 0) {
        alert("El número es positivo.");
    } else if (numero < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número es cero.");
    }
}

function verificar12() {
    let anio = Number(prompt("Ingrese un año para verificar si es bisiesto:"));
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        alert("El año " + anio + " es bisiesto.");
    } else {
        alert("El año " + anio + " no es bisiesto.");
    }
}

function verificar13() {
    let calificacion = prompt("Ingrese la calificación en letra (A, B, C, D o F):").toUpperCase();
    if (calificacion === "A") alert("Excelente");
    else if (calificacion === "B") alert("Notable");
    else if (calificacion === "C") alert("Aprobado");
    else if (calificacion === "D") alert("Deficiente");
    else if (calificacion === "F") alert("Reprobado");
    else alert("Calificación no válida.");
}

function verificar14() {
    let l1 = Number(prompt("Ingrese la longitud del primer lado del triángulo:"));
    let l2 = Number(prompt("Ingrese la longitud del segundo lado del triángulo:"));
    let l3 = Number(prompt("Ingrese la longitud del tercer lado del triángulo:"));
    if (l1 === l2 && l2 === l3) {
        alert("El triángulo es Equilátero (todos sus lados son iguales).");
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        alert("El triángulo es Isósceles (dos lados iguales).");
    } else {
        alert("El triángulo es Escaleno (todos sus lados diferentes).");
    }
}

function verificar15() {
    let velocidad = Number(prompt("Ingrese la velocidad actual del vehículo (en km/h):"));
    let limite = Number(prompt("Ingrese la velocidad límite permitida:"));
    if (velocidad > limite) {
        alert("¡Alerta! Vehículo con exceso de velocidad. Multa aplicada.");
    } else {
        alert("Velocidad dentro del límite permitido.");
    }
}

function verificar16() {
    let tipo = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
    let costo = Number(prompt("Ingrese el valor base del servicio:"));
    if (tipo === "A") alert("Descuento del 30%. Total: $" + (costo * 0.7));
    else if (tipo === "B") alert("Descuento del 20%. Total: $" + (costo * 0.8));
    else if (tipo === "C") alert("Descuento del 10%. Total: $" + (costo * 0.9));
    else alert("Tipo de membresía no válido.");
}

function verificar17() {
    let num = Number(prompt("Ingrese un número entero para verificar divisibilidad por 3 y 5:"));
    if (num % 3 === 0 && num % 5 === 0) {
        alert("El número es divisible por 3 y por 5 al mismo tiempo.");
    } else {
        alert("El número NO cumple con la condición de divisibilidad por ambos.");
    }
}

function verificar18() {
    let horas = Number(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));
    let tarifa = Number(prompt("Ingrese el pago por hora:"));
    let sueldo;
    if (horas > 40) {
        let extras = horas - 40;
        sueldo = (40 * tarifa) + (extras * tarifa * 1.5);
        alert("Incluye horas extras. Sueldo total: $" + sueldo);
    } else {
        sueldo = horas * tarifa;
        alert("Sueldo total: $" + sueldo);
    }
}

function verificar19() {
    let imc = Number(prompt("Ingrese su índice de masa corporal (IMC):"));
    if (imc < 18.5) alert("Bajo peso.");
    else if (imc < 25) alert("Peso normal (saludable).");
    else if (imc < 30) alert("Sobrepeso.");
    else alert("Obesidad.");
}

function verificar20() {
    let stock = Number(prompt("Ingrese la cantidad actual en stock del producto:"));
    let minimo = Number(prompt("Ingrese el stock mínimo requerido:"));
    if (stock <= minimo) {
        alert("¡Atención! Stock bajo. Es necesario realizar un pedido de reposición.");
    } else {
        alert("Stock suficiente.");
    }
}

function verificar21() {
    let letra = prompt("Ingrese una sola letra del abecedario:").toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("La letra ingresada es una vocal.");
    } else {
        alert("La letra ingresada es una consonante.");
    }
}

function verificar22() {
    let consumo = Number(prompt("Ingrese los kilovatios (kWh) consumidos:"));
    let total = consumo * 550;
    if (consumo > 300) {
        total *= 1.20;
        alert("Consumo elevado con recargo del 20%. Total a pagar: $" + total);
    } else {
        alert("Total a pagar por servicios públicos: $" + total);
    }
}

function verificar23() {
    let puntaje = Number(prompt("Ingrese el puntaje obtenido en la prueba (de 0 a 100):"));
    if (puntaje >= 90) alert("Nivel: Sobresaliente.");
    else if (puntaje >= 70) alert("Nivel: Satisfactorio.");
    else alert("Nivel: Debe mejorar.");
}

function verificar24() {
    let monto = Number(prompt("Ingrese el valor de la compra para aplicar ruleta de descuentos:"));
    if (monto > 200000) {
        alert("¡Ganó un descuento del 20%!");
    } else if (monto > 100000) {
        alert("¡Ganó un descuento del 10%!");
    } else {
        alert("No aplica para descuento en ruleta.");
    }
}

function verificar25() {
    let codigo = prompt("Ingrese el código promocional:");
    if (codigo === "DESCUENTO50") {
        alert("¡Código válido! Se aplicó el 50% de rebaja.");
    } else {
        alert("Código promocional inválido o expirado.");
    }
}


