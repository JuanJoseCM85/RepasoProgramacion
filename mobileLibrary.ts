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

    public totalPriceCalculation():void
    {
        let sumTotal:number =0;
        for(let m of this.mobiles){
            sumTotal += m.price;
        }

        this.totalPrice = sumTotal;
    }

}