function continente2(pais:string):void
{
    
    
    let africa:string[] = ["Angola","Argelia","Benín","Botsuana"];
    let europa:string[] = ["España","Francia","Italia","Alemania"];
    let asia:string[] = ["Afganistan","Arabia Saudi","Armenia","Camboya"];
    let america:string[] = ["Brasil","Argentina","Mexico","Canada"];
    let oceania:string[] = ["Australia","Fiyi","kiribati","Nauru"];

    let continentes:string[][]=[africa,europa,asia,america,oceania];

    let encontrado:boolean = false;
    let conti:number = -1;
    let i:number = 0;
    while(!encontrado && i < continentes.length){

        for( let j:number = 0; j<continentes[i].length; j++){
            if(continentes[i][j] == pais ){
                conti= i ;
                encontrado=true;
            }
        }

        i++;
    }

    console.log(pais + " pertenece al coninente ");
    if(conti == 0)
        console.log("africano");
    else if (conti == 1)
            console.log("europeo");
        else if (conti == 2)
                console.log("asiatico");
            else if ( conti == 3 )
                console.log("americano");
                else if ( conti == 4)
                        console.log("oceania");
                    else if (conti == -1 )
                        console.log("No se ha encontrado el continente.");

}

function todosEmpiezanM (nombres:string[]):boolean
{
    let todosM:boolean = true;
    let i:number = 0;
    while ( todosM && i < nombres.length){
        if(nombres[i][0] != "M")
            todosM = false;
        i++;
    }
    return todosM;

}