class Dino
{
    constructor(naam,vleeseter,leeftijd)
    {   
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        
       
    }
    eetDino(dino)
    {
        dino.leeft = false;
        console.log("trex eet dino stego op")
    }
    eetPlant(plant)
    {
        plant.leeft = true;
        console.log("Stego eet de plant grass")
    }

}

class App
{
    runApplication()
    {
        this.plant = plant;
        let trex = new Dino("Trex",true,10);
        console.log(trex);

        let langnek = new Dino("langnek",true,67);
        console.log(langnek);

        let raptor = new Dino("raptor",true,23); 
        console.log(raptor);
    }
}

class plant
{
    constructor(naam)
    {
        this.naam = naam;
       
    }

}

let App = new App()
runApplication()