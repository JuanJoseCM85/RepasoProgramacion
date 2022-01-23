import { MobileLibrary } from "./mobileLibrary";
import { Mobile } from "./mobile";

let nokia3210 = new Mobile("Nokia3210","3210","Nokia",1,"Blue",false,0,23);
let iphone3G = new Mobile("Iphone3g","Iphone","Apple",32,"Grey",false,1,230);
let samsungGalaxy10 = new Mobile("MiGalaxy10","Galaxy10","Samsung",128,"Black",true,3,550);
let oppoFindX3 = new Mobile("MiOppoFind","Find X3","Oppo",256,"Black",true,5,990);

let arrayMob:Mobile[] = [nokia3210,iphone3G,samsungGalaxy10,oppoFindX3];

let coleccionMobil:MobileLibrary = new MobileLibrary("Mi colección","Almeria",arrayMob);

//coleccionMobil.totalPriceCalculation();

console.log("El Precio total es: ");
console.log(coleccionMobil.getTotalPrice());

//Probamos todos los get.
console.log(coleccionMobil.getName());
console.log(coleccionMobil.getLocation());
console.log(coleccionMobil.getMobiles());

//Probamos los set
coleccionMobil.setName("Nueva Colección");
coleccionMobil.setLocation("Granada");
//coleccionMobil.setTotalPrice(140);

console.log(coleccionMobil.getName());
console.log(coleccionMobil.getLocation());
console.log(coleccionMobil.getMobiles());

coleccionMobil.printLibrary();
