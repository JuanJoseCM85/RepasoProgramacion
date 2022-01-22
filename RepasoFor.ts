//imprime los números impares hasta n.
function numerosImpares(n:number):void{

    for(let i:number = 0; i < n; i++){
        if(i%2 != 0)
            console.log(i);
    }

}

//recibe un array y lo devuelve invertido.

function invierteArray(a:number[]):number[]
{
    let aux:number[] = [];

    for(let i = a.length -1; i >=0; i --)
        aux.push(a[i]);

    return aux;
}

function estaEnArcoiris(colores:string[]):void
{
    let coloresArco:string[] = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Azul", "Violeta"];
    let encontrado:boolean = false;
    for (let i:number =0; i< colores.length; i++){
        for( let j:number =0; j < coloresArco.length; j++){
            if( colores[i] == coloresArco[j]){
                console.log(colores[i] + " SI está en el arcoiris");
                encontrado = true;
            }  
        }
        if(!encontrado)
                console.log(colores[i] + " NO está en el arcoiris");
            encontrado = false;
    }
}

function existeNumPar(num:number[]):boolean
{
    for(let i:number=0; i<num.length; i++){
        if(num[i]%2 == 0)
            return true;
    }
    return false;
}

function sumCaracteres(palabras:string[]):number
{
    let suma:number = 0;

    for (let i:number = 0; i< palabras.length; i++){
        suma += palabras[i].length;
    }

    return suma;
}

numerosImpares(20);

console.log(invierteArray([4,5,6]));

estaEnArcoiris(["Turquesa","Rojo","Verde","Fucsia"]);
console.log(existeNumPar([3,5,9,11,15]));

console.log(sumCaracteres(["Casa","Cara","i"]));
