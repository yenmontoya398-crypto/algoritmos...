function ej1() {
    let inicio = Number(prompt("Ingrese el número inicial de la secuencia:"));
    let fin = Number(prompt("Ingrese el número final de la secuencia:"));
    let lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    alert("Números del " + inicio + " al " + fin + ":\n" + lista.join(", "));
}

function ej2() {
    let num = Number(prompt("Ingrese el número para iniciar la cuenta regresiva:"));
    let lista = [];
    for (let i = num; i >= 0; i--) {
        lista.push(i);
    }
    alert("Cuenta regresiva:\n" + lista.join(", ") + "\n¡Proceso finalizado!");
}

function ej3() {
    let limite = Number(prompt("Ingrese el número límite para buscar pares:"));
    let pares = [];
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) pares.push(i);
    }
    alert("Números pares encontrados:\n" + pares.join(", "));
}

function ej4() {
    let limite = Number(prompt("Ingrese el número límite para buscar impares:"));
    let impares = [];
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) impares.push(i);
    }
    alert("Números impares encontrados:\n" + impares.join(", "));
}

function ej5() {
    let n = Number(prompt("Ingrese el número límite (N) para sumar secuencialmente:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    alert("La suma total desde 1 hasta " + n + " es: " + suma);
}

function ej6() {
    let num = Number(prompt("Ingrese el número del cual desea ver la tabla de multiplicar:"));
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(num + " x " + i + " = " + (num * i));
    }
    alert("Tabla de multiplicar del " + num + ":\n\n" + tabla.join("\n"));
}

function ej7() {
    let limite = Number(prompt("Ingrese el número límite para contar pares e impares:"));
    let p = 0, imp = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) p++;
        else imp++;
    }
    alert("Hasta el número " + limite + ":\nTotal de pares: " + p + "\nTotal de impares: " + imp);
}

function ej8() {
    let cant = Number(prompt("¿Cuántos números desea promediar?:"));
    let suma = 0;
    for (let i = 1; i <= cant; i++) {
        suma += Number(prompt("Ingrese el número " + i + " de " + cant + ":"));
    }
    let promedio = cant > 0 ? (suma / cant).toFixed(2) : 0;
    alert("Suma total: " + suma + "\nPromedio obtenido: " + promedio);
}

function ej9() {
    let cant = Number(prompt("¿Cuántos números va a comparar para hallar el mayor?:"));
    let mayor = null;
    for (let i = 1; i <= cant; i++) {
        let n = Number(prompt("Ingrese el valor " + i + ":"));
        if (mayor === null || n > mayor) mayor = n;
    }
    alert("El número mayor ingresado es: " + mayor);
}

function ej10() {
    let cant = Number(prompt("¿Cuántos números va a comparar para hallar el menor?:"));
    let menor = null;
    for (let i = 1; i <= cant; i++) {
        let n = Number(prompt("Ingrese el valor " + i + ":"));
        if (menor === null || n < menor) menor = n;
    }
    alert("El número menor ingresado es: " + menor);
}

function ej11() {
    let cant = Number(prompt("¿Cuántos números desea clasificar?:"));
    let pos = 0, neg = 0, ceros = 0;
    for (let i = 1; i <= cant; i++) {
        let n = Number(prompt("Ingrese el número " + i + ":"));
        if (n > 0) pos++;
        else if (n < 0) neg++;
        else ceros++;
    }
    alert("Resultados:\nPositivos: " + pos + "\nNegativos: " + neg + "\nCeros: " + ceros);
}

function ej12() {
    let cant = Number(prompt("¿Cuántas ventas va a registrar?:"));
    let total = 0, mayor = null, menor = null;
    for (let i = 1; i <= cant; i++) {
        let v = Number(prompt("Ingrese el valor de la venta " + i + ":"));
        total += v;
        if (mayor === null || v > mayor) mayor = v;
        if (menor === null || v < menor) menor = v;
    }
    alert("Reporte de Ventas:\nTotal vendido: $" + total + "\nVenta mayor: $" + mayor + "\nVenta menor: $" + menor);
}

function ej13() {
    let cant = 0, suma = 0, num;
    do {
        num = Number(prompt("Ingrese un número (ingrese 0 para finalizar y ver resultados):"));
        if (num !== 0) {
            cant++;
            suma += num;
        }
    } while (num !== 0);
    alert("Total de números ingresados: " + cant + "\nSuma acumulada: " + suma);
}

function ej14() {
    let clave = "";
    let intentos = 0;
    while (clave !== "1234") {
        clave = prompt("Ingrese la contraseña del sistema:");
        intentos++;
        if (clave !== "1234") {
            alert("Contraseña incorrecta. Intente de nuevo.");
        }
    }
    alert("¡Acceso concedido! Número de intentos realizados: " + intentos);
}

function ej15() {
    let op = 0;
    while (op !== 4) {
        op = Number(prompt("MENÚ PRINCIPAL:\n1. Saludar\n2. Mostrar información\n3. Realizar una suma\n4. Salir\nSeleccione una opción:"));
        if (op === 1) alert("¡Hola, bienvenida al sistema!");
        else if (op === 2) alert("Este es un menú interactivo con bucle while.");
        else if (op === 3) {
            let a = Number(prompt("Ingrese el primer valor a sumar:"));
            let b = Number(prompt("Ingrese el segundo valor a sumar:"));
            alert("El resultado de la suma es: " + (a + b));
        } else if (op === 4) {
            alert("Saliendo del menú...");
        } else {
            alert("Opción no válida. Intente de nuevo.");
        }
    }
}

function ej16() {
    let saldo = 500000;
    let op = 0;
    while (op !== 4) {
        op = Number(prompt("CAJERO AUTOMÁTICO (Saldo actual: $" + saldo + ")\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir\nSeleccione una opción:"));
        if (op === 1) {
            alert("Su saldo actual es: $" + saldo);
        } else if (op === 2) {
            let retiro = Number(prompt("Ingrese la cantidad de dinero a retirar:"));
            if (retiro > saldo) {
                alert("Fondos insuficientes.");
            } else {
                saldo -= retiro;
                alert("Retiro exitoso. Nuevo saldo: $" + saldo);
            }
        } else if (op === 3) {
            let deposito = Number(prompt("Ingrese la cantidad de dinero a depositar:"));
            saldo += deposito;
            alert("Depósito exitoso. Nuevo saldo: $" + saldo);
        } else if (op === 4) {
            alert("Gracias por usar el cajero automático.");
        } else {
            alert("Opción inválida.");
        }
    }
}

function ej17() {
    let cant = Number(prompt("¿Cuántos estudiantes va a evaluar?:"));
    let aprobados = 0, reprobados = 0, sumaNotas = 0;
    for (let i = 1; i <= cant; i++) {
        let nota = Number(prompt("Ingrese la nota final del estudiante " + i + ":"));
        sumaNotas += nota;
        if (nota >= 3.0) aprobados++;
        else reprobados++;
    }
    let promedio = cant > 0 ? (sumaNotas / cant).toFixed(2) : 0;
    alert("Resumen de notas:\nAprobados: " + aprobados + "\nReprobados: " + reprobados + "\nPromedio general: " + promedio);
}

function ej18() {
    let secreto = Math.floor(Math.random() * 100) + 1;
    let intento = 0, contador = 0;
    alert("¡Juego de adivinanza! He generado un número secreto entre 1 y 100.");
    while (intento !== secreto) {
        intento = Number(prompt("Ingrese su número propuesto:"));
        contador++;
        if (intento < secreto) {
            alert("El número secreto es MAYOR.");
        } else if (intento > secreto) {
            alert("El número secreto es MENOR.");
        } else {
            alert("¡Felicitaciones! Adivinaste el número en " + contador + " intentos.");
        }
    }
}

function ej19() {
    let cant = Number(prompt("¿Cuántos productos desea registrar en el inventario?:"));
    let valorTotal = 0;
    for (let i = 1; i <= cant; i++) {
        let nombre = prompt("Ingrese el nombre del producto " + i + ":");
        let precio = Number(prompt("Ingrese el precio unitario de '" + nombre + "':"));
        let stock = Number(prompt("Ingrese la cantidad en stock de '" + nombre + "':"));
        valorTotal += (precio * stock);
    }
    alert("El valor total monetario del inventario es: $" + valorTotal);
}

function ej20() {
    let n = Number(prompt("Ingrese el número límite (N) para calcular la suma de cuadrados:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += (i * i);
    }
    alert("La suma de los cuadrados desde 1 hasta " + n + " es: " + suma);
}

function ej21() {
    let n = Number(prompt("¿Cuántos términos de la serie de Fibonacci desea generar?:"));
    let a = 0, b = 1;
    let serie = [];
    for (let i = 1; i <= n; i++) {
        serie.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    alert("Serie de Fibonacci (" + n + " términos):\n" + serie.join(", "));
}