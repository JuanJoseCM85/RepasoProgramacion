import { Punto } from "./punto";

export class Triangulo
{
    //Declaración de atributos.
    private x:Punto;
    private y:Punto;
    private z:Punto;

    constructor (x:Punto,y:Punto,z:Punto)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public calcularLongitudLados():number[]
    {
        let logitudLados:number[] = Array(3);

        logitudLados[0] = this.x.calcularDistancia(this.y);
        logitudLados[1]= this.y.calcularDistancia(this.z);
        logitudLados[2]= this.z.calcularDistancia(this.x);

        return logitudLados;
    }


}