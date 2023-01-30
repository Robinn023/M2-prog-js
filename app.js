class App 
{ tekenHuis(g,x,y)
{
 
    
    g.beginPath()
    g.fillStyle = "red";
    g.moveTo(x,y);
    g.lineTo(x+10,y+10);
    g.lineTo(x+10,y+20);
    g.lineTo(x-10,y+20);
    g.lineTo(x-10,y+10);
    g.closePath();
    g.stroke();
    g.fill()

        for (let i = 0; i < 2; i++)
        {
            let startx=x-4+(i*7);
            this.tekenRaam(g,startx,y+9)
        }
        
        for (let i = 0; i < 1; i++)
        {
            let startx=x-4+(i*7);
            this.tekenRaam(g,startx,y+15)
    
        }

        for (let i = 1; i < 2; i++)
        {
            let startx=x-4+(i*7);
            this.tekenDeur(g,startx,y+15)
    
        }
}

tekenBlauwhuis(g,x,y)
{
     
        
    g.beginPath()
    g.fillStyle = "blue";
    g.moveTo(x,y);
    g.lineTo(x+10,y+10);
    g.lineTo(x+10,y+20);
    g.lineTo(x-10,y+20);
    g.lineTo(x-10,y+10);
    g.closePath();
    g.stroke();
    g.fill()
    
            for (let i = 0; i < 2; i++)
            {
                let startx=x-4+(i*7);
                this.tekenRaam(g,startx,y+9)
            }
            
            for (let i = 0; i < 1; i++)
            {
                let startx=x-4+(i*7);
                this.tekenRaam(g,startx,y+15)
        
            }
    
            for (let i = 1; i < 2; i++)
            {
                let startx=x-4+(i*7);
                this.tekenDeur(g,startx,y+15)
        
            }
    }

    tekenGrijshuis(g,x,y)
    {
         
            
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x,y);
        g.lineTo(x+10,y+10);
        g.lineTo(x+10,y+20);
        g.lineTo(x-10,y+20);
        g.lineTo(x-10,y+10);
        g.closePath();
        g.stroke();
        g.fill()
        
                for (let i = 0; i < 2; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenRaam(g,startx,y+9)
                }
                
                for (let i = 0; i < 1; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenRaam(g,startx,y+15)
            
                }
        
                for (let i = 1; i < 2; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenDeur(g,startx,y+15)
            
                }
        }
    
tekenGrijshuis(g,x,y)
    {
         
            
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(x,y);
        g.lineTo(x+10,y+10);
        g.lineTo(x+10,y+20);
        g.lineTo(x-10,y+20);
        g.lineTo(x-10,y+10);
        g.closePath();
        g.stroke();
        g.fill()
        
                for (let i = 0; i < 2; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenRaam(g,startx,y+9)
                }
                
                for (let i = 0; i < 1; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenRaam(g,startx,y+15)
            
                }
        
                for (let i = 1; i < 2; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenDeur(g,startx,y+15)
            
                }
        }
    
tekenPaarshuis(g,x,y)
    {
             
                
        g.beginPath()
        g.fillStyle = "purple";
        g.moveTo(x,y);
        g.lineTo(x+10,y+10);
        g.lineTo(x+10,y+20);
        g.lineTo(x-10,y+20);
        g.lineTo(x-10,y+10);
        g.closePath();
        g.stroke();
        g.fill()
            
                for (let i = 0; i < 2; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenRaam(g,startx,y+9)
                }
                    
                for (let i = 0; i < 1; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenRaam(g,startx,y+15)
                
                }
            
                for (let i = 1; i < 2; i++)
                {
                    let startx=x-4+(i*7);
                    this.tekenDeur(g,startx,y+15)
                
                }
        }
        
tekenFlat(g,x,y)
{
     
        
    g.beginPath()
    g.fillStyle = "orange";
    g.moveTo(x,y);
    g.lineTo(x+10,y+25);
    g.lineTo(x+10,y+40);
    g.lineTo(x-35,y+40);
    g.lineTo(x-35,y+0);

    g.closePath();
    g.stroke();
    g.fill()

        for (let i = 0; i < 5; i++)
        {
            let startx=x-30+(i*7);
            this.tekenRaam(g,startx,y+4)
            this.tekenRaam(g,startx,y+10)
            this.tekenRaam(g,startx,y+16)
            this.tekenRaam(g,startx,y+22)
        }
        
        for (let i = 0; i < 6; i++)
        {
            let startx=x-30+(i*7);
            this.tekenRaam(g,startx,y+28)
            this.tekenRaam(g,startx,y+34)
        }

}

tekenRaam(g,x,y)
{
     
        
    g.beginPath()
    g.fillStyle = "black";
    g.moveTo(x,y);
    g.lineTo(x+1,y+1);
    g.lineTo(x+1,y+1);
    g.lineTo(x-1,y+1);
    g.lineTo(x-1,y+1);
    g.closePath();
    g.stroke();
    g.fill()
}
tekenDeur(g,x,y)
{
    g.beginPath()
    g.fillStyle = "brown";
    g.moveTo(x,y);
    g.lineTo(x+0,y+0);
    g.lineTo(x+0,y+0);
    g.lineTo(x-0,y+5);
    g.lineTo(x-0,y+1);
    g.closePath();
    g.stroke();
    g.fill()
}

tekenBoom(g,x,y)
{
     

    g.beginPath()
    g.fillStyle = "brown";
    g.moveTo(x+10, y+35)
    g.lineTo(x+10, y+30);
    g.lineTo(x+10, y+20);
    g.lineTo(x+15, y+20);
    g.lineTo(x+15, y+35);

    g.closePath();
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.fillStyle = "green";
    g.arc(
        x+12.5, 
        y+13, 
        9, 
        0, 
        2 * Math.PI
    );
    g.stroke();
    g.fill();
    g.closePath();
   
}

tekenBoom2(g,x,y)
{
     

    g.beginPath()
    g.fillStyle = "brown";
    g.moveTo(x+10, y+35)
    g.lineTo(x+10, y+30);
    g.lineTo(x+10, y+20);
    g.lineTo(x+15, y+20);
    g.lineTo(x+15, y+35);

    g.closePath();
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.fillStyle = "chartreuse";
    g.arc(
        x+12.5, 
        y+13, 
        9, 
        0, 
        2 * Math.PI
    );
    g.stroke();
    g.fill();
    g.closePath();
   
}

tekenBoom3(g,x,y)
{
     

    g.beginPath()
    g.fillStyle = "brown";
    g.moveTo(x+10, y+35)
    g.lineTo(x+10, y+30);
    g.lineTo(x+10, y+20);
    g.lineTo(x+15, y+20);
    g.lineTo(x+15, y+35);

    g.closePath();
    g.stroke();
    g.fill();
    g.closePath();

    g.beginPath()
    g.fillStyle = "greenyellow";
    g.arc(
        x+12.5, 
        y+13, 
        9, 
        0, 
        2 * Math.PI
    );
    g.stroke();
    g.fill();
    g.closePath();
   
}


    


runApplication()
    {
       

        let canvas = document.getElementById("dorp");
        let g = canvas.getContext("2d");
        
        for (let i = 27; i < 33; i++)
        {
            this.tekenHuis(g,i*36,85)
        }

        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*940,20)
        }

        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*905,20)
        }
        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*875,40)
        }

        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*970,40)
        }

        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*1186,20)
        }

        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*1221,20)
        }
        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*1154,40)
        }

        for (let i = 1; i < 2; i++)
        {
            this.tekenHuis(g,i*1254,40)
        }

        
        for (let i = 1; i < 10; i++)
        {
            this.tekenFlat(g,i*1276,80)
        }
        

        for (let i = 1; i < 10; i++)
        {
            this.tekenFlat(g,i*876,80)
        }

        for (let i = 14; i < 17; i++)
        {
            this.tekenFlat(g,i*65,280)
        }

        for (let i = 18; i < 20; i++)
        {
            this.tekenFlat(g,i*65,280)
        }




        for (let i = 1; i < 20; i++)
        {
            this.tekenHuis(g,i*20,65)
        }

        for (let i = 1; i < 20; i++)
        {
            this.tekenBlauwhuis(g,i*20,95)
        }

        
        for (let i = 1; i < 20; i++)
        {
            this.tekenHuis(g,i*20,165)
        }

        
        for (let i = 1; i < 20; i++)
        {
            this.tekenBlauwhuis(g,i*20,195)
        }

        for (let i = 27; i < 39; i++)
        {
            this.tekenGrijshuis(g,i*20,95)
        }

        for (let i = 27; i < 39; i++)
        {
            this.tekenPaarshuis(g,i*20,65)
        }

        for (let i = 27; i < 39; i++)
        {
            this.tekenGrijshuis(g,i*20,165)
        }

        
        for (let i = 27; i < 39; i++)
        {
            this.tekenPaarshuis(g,i*20,195)
        }

        for (let i = 1; i < 41; i++)
        {
            this.tekenBoom(g,i*10,0.1)
        }

        
        for (let i = 50; i < 84; i++)
        {
            this.tekenBoom(g,i*10,0.1)
        }

        for (let i = 84; i < 128; i++)
        {
            this.tekenBoom(g,i*10,150)
        }

        
        for (let i = 84; i < 128; i++)
        {
            this.tekenBoom2(g,i*10,165)
        }

            
        for (let i = 84; i < 128; i++)
        {
            this.tekenBoom3(g,i*10,180)
        }




        


        








    
        this.tekenFlat(g,65,200)
        
        this.tekenFlat(g,1115,280)

        

        //for (let i = 1; i < 2; i++)
        //{
        this.tekenBoom(g,835, 25)
        this.tekenBoom(g,985, 25)
        this.tekenBoom(g,1055, 1)
        this.tekenBoom(g,1045, 1)
        this.tekenBoom(g,1033, 4)
        this.tekenBoom(g,1039, 5)
        this.tekenBoom(g,1014, 6)
        this.tekenBoom(g,1073, 4)
        this.tekenBoom(g,1062, 6)
        this.tekenBoom(g,1023, 12)
        this.tekenBoom(g,1094, 4)
        this.tekenBoom(g,1004, 9)
        this.tekenBoom(g,1012, 13)
        this.tekenBoom(g,1112, 18)
        this.tekenBoom(g,1082, 9)
        this.tekenBoom(g,1092, 10)
        this.tekenBoom(g,1055, 1)
        this.tekenBoom(g,999, 13)
        this.tekenBoom(g,1009, 10)
        this.tekenBoom(g,1043, 8)
        this.tekenBoom(g,1012, 7)
        this.tekenBoom(g,1033, 7)
        this.tekenBoom(g,1099, 8)
        this.tekenBoom(g,1046, 10)
        this.tekenBoom(g,1074, 5)
        this.tekenBoom(g,1094, 17)
        this.tekenBoom(g,1082, 17)
        this.tekenBoom(g,1092, 21)
        this.tekenBoom(g,1077, 24)
        this.tekenBoom(g,1036, 27)
        this.tekenBoom(g,1001, 19)
        this.tekenBoom(g,1062, 14)
        this.tekenBoom(g,1090, 23)
        this.tekenBoom(g,1000, 27)
        this.tekenBoom(g,1026, 21)
        this.tekenBoom(g,1050, 29)
        this.tekenBoom(g,1040, 28)
        this.tekenBoom(g,1051, 27)
        this.tekenBoom(g,1020, 33)
        this.tekenBoom(g,1012, 36)
        this.tekenBoom(g,1034, 34)
        this.tekenBoom(g,1044, 32)
        this.tekenBoom(g,1056, 30)
        this.tekenBoom(g,1070, 34)
        this.tekenBoom(g,1065, 34)
        this.tekenBoom(g,1095, 35)
        this.tekenBoom(g,1107, 25)
        this.tekenBoom(g,1085, 33)
        this.tekenBoom(g,400, 165)
        this.tekenBoom(g,400, 180)
        this.tekenBoom(g,400, 65)
        this.tekenBoom(g,400, 80)
        this.tekenBoom(g,500, 165)
        this.tekenBoom(g,500, 180)
        this.tekenBoom(g,500, 65)
        this.tekenBoom(g,500, 80)



        
        
        //}

    
    
       
        


    }
}




let app = new App();
app.runApplication();



