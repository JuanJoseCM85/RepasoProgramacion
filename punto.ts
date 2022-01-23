export class Punto
{
    //Definición de atributos de la clase.
    private x:number;
    private y:number;

    //Constructor
    constructor (x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }

    //Metodos setters y  getters
    public setX(x:number):void
    {
        this.x = x;
    }

    public getX():number
    {
        return this.x;
    }

    public setY(y:number):void
    {
        this.y = y;
    }

    public getY():number
    {
        return this.y;
    }

    public toString():string
    {
        return "(" + this.x + "," + this.y + ")";
    }

    public distanciaAlOrigen():number
    {
      return Math.sqrt(((0-this.x)*(0-this.x))+((0-this.y)*(0-this.y)));  
    }

    public calcularDistancia(otroPunto:Punto):number
    {
      return Math.sqrt(((otroPunto.getX()-this.x)*(otroPunto.getX()-this.x))+((otroPunto.getY()-this.y)*(otroPunto.getY()-this.y)));  
    }

    public calcularCuadrante():number
    {
        if( this.x > 0 && this.y > 0)
            return 1;
        else if(this.x < 0 && this.y > 0)
                return 2;
            else if( this.x < 0 && this.y < 0)
                return 3;
                else if (this.x > 0 && this.y < 0)
                    return 4;
                    else
                    return 0;
    }

    public calcularMasCercano(puntos:Punto[]):Punto
    {
        let puntoMasCercano = puntos[0];
        let distancia:number = this.calcularDistancia(puntos[0]);
       for(let valor of puntos){
           let nuevaDistancia:number = this.calcularDistancia(valor);
           if(nuevaDistancia < distancia){
               puntoMasCercano = valor;
               distancia = nuevaDistancia;
           } 

       }
       return puntoMasCercano; 
    }
}