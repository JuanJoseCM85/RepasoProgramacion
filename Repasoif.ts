// Funcion que dado una fecha del tipo Date devuelve el signo zodiacal de e
// dicha fecha.
function signoZodiacal2(fecha:Date):string
{
    let mes:number = fecha.getMonth();
    let dia:number = fecha.getDate();
    

    switch(mes){
        case 0:
            if( dia <= 20)
                return "Capricornio";
            else
                return "Acuario";
            break;
        case 1:
            if( dia <= 18)
                return "Acuario";
            else
                return "Piscis";
            break;
        case 2:
            if( dia <= 20)
                return "Piscis";
            else
                return "Aries";
            break;
        case 3:
            if( dia <= 20)
                return "Aries";
            else
                return "Tauro";
            break;
        case 4:
            if( dia <= 21)
                return "Tauro";
            else
                return "Géminis";
            break;
        case 5:
            if( dia <= 21)
                return "Géminis";
            else
                return "Cáncer";
            break;
        case 6:
            if( dia <= 22)
                return "Cáncer";
            else
                return "Leo";
            break;
        case 7:
            if( dia <= 22)
                return "Leo";
            else
                return "Virgo";
            break;
        case 8: 
            if( dia <= 22)
                return "Virgo";
            else
                return "Libra";
            break;
        case 9:
            if( dia <= 22)
                return "Libra";
            else
                return "Escorpio";
            break;
        case 10:
            if( dia <= 22)
                return "Escorpio";
            else
                return "Sagitario";
            break;
        case 11:
            if( dia <= 21)
                return "Sagitario";
            else
                return "Capricornio";
            break;
        default:
            return "Fecha Incorrecta";
            
            
    }
        
}


function esParoImpar(n:number):void{

    if(n%2 != 0)
        console.log("El numero es impar");
    else
        console.log("El numero es par");
        

}


let fecha2 = new Date("May 5,1985");

console.log(signoZodiacal2(fecha2));

esParoImpar(111);













