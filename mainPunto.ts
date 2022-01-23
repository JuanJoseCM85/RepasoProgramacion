import { Punto } from "./punto";

let punto:Punto = new Punto(3,5);
let punto2:Punto = new Punto (1,1);
let punto3:Punto = new Punto (-4,5);
let punto4:Punto = new Punto (-5,-9);
let punto5:Punto = new Punto (0,4);

console.log(punto.toString());

console.log("La distancia al origen es: ");
console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(punto2));

console.log("El cuadrante de " + punto.toString() +" es: ");
console.log(punto.calcularCuadrante());


console.log("El cuadrante de " + punto3.toString() +" es: ");
console.log(punto3.calcularCuadrante());
console.log("Y su distancia al punto 1 es: " + punto3.calcularDistancia(punto));

console.log("El cuadrante de " + punto4.toString() +" es: ");
console.log(punto4.calcularCuadrante());
console.log("Y su distancia al punto 1 es: " + punto4.calcularDistancia(punto));

console.log("El cuadrante de " + punto5.toString() +" es: ");
console.log(punto5.calcularCuadrante());
console.log("Y su distancia al punto 1 es: " + punto5.calcularDistancia(punto));

let arrayPuntos:Punto[] = [punto2,punto3,punto4,punto5];
let puntoCercano = punto.calcularMasCercano(arrayPuntos);

console.log("El más Cercano es: ");
console.log(puntoCercano.toString());



