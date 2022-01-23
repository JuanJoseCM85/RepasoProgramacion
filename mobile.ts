export class Mobile
{
    //Propiedades de la Clase Mobile.
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    //Constructor
    constructor(nombre:string,modelo:string,marca:string,tamanoTarjet:number,color:string,es5G:boolean,numeroCamaras:number,precio:number)
    {
        this.name = nombre;
        this.model = modelo;
        this.trademark = marca;
        this.sdSize = tamanoTarjet;
        this.color = color;
        this.is5G = es5G;
        this.cameraNumber = numeroCamaras;
        this.price = precio;
    }

    public mostrarAtributos():void
    {
        console.log("Nombre - " + this.name);
        console.log("Modelo - " + this.model);
        console.log("Marca - " + this.trademark);
        console.log("Tamaño Tarjeta - " + this.sdSize);
        console.log("Color - " + this.color);
        console.log("Tiene 5g - " + this.is5G);
        console.log("Numero camaras - " + this.cameraNumber);
        console.log("Precio - " + this.price);
        console.log(" ");
        
    }

}