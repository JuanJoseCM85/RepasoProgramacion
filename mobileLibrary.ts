import { Mobile } from "./mobile";

export class MobileLibrary
{
    //Declaración de atributos
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string,location:string,mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    //Metodos Getters y Setters-
    public getName():string
    {
        return this.name;
    }

    public setName(nombre:string):void
    {
        this.name = nombre;
    }

    public getLocation():string
    {
        return this.location;
    }

    public setLocation(location:string):void
    {
        this.location = location;
    }

    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }

    public setMobiles(mobiles:Mobile[]):void
    {
        this.mobiles = mobiles;
    }

    public getTotalPrice():number
    {
        return this.totalPrice;
    }

    public setTotalPrice(precio:number):void
    {
        this.totalPrice = precio;
    }

    private totalPriceCalculation():number
    {
        let sumTotal:number =0;
        for(let m of this.mobiles){
            sumTotal += m.price;
        }

        return sumTotal;
    }

    public printLibrary():void
    {
        console.log("This is all my mobiles:");
       

        for(let m in this.mobiles){
            console.log("The characteristics or the mobile "+ this.mobiles[m].name + " are");
            this.mobiles[m].mostrarAtributos();    
        }
        console.log("Price overall: "+ this.getTotalPrice());
        
        
        
    }

}