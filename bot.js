        alert("Project made by Ansh \n Please Upvote");
         var name=prompt("Your Name");
        if(name==""){
            document.getElementById("s").innerHTML="Cena";
        }else{
         document.getElementById("s").innerHTML=name;
        }
         
         
         const filled=[];
         const align=[];
          document.getElementById("result").innerHTML="Click on any box to start";
       document.getElementById("again").hidden=true;
             function press(clicked)
             {
          document.getElementById("result").innerHTML="";
              document.getElementById("result2").innerHTML ="";
            if(align[clicked-1]==null){
       var el=document.getElementById(clicked);
       el.innerHTML='X';
          filled[clicked-1]=clicked;
          align[clicked-1]="X";
          
          for(var x=1;x<=9;x++){ 
          document.getElementById(x).style.pointerEvents = 'none';
          }
        
        
        
        document.getElementById("bot").style.animation = "twinb 2s linear infinite";
        document.getElementById("you").style.animation = "none";
        document.getElementById("status").innerHTML="Bot's Turn";
         
          if(align[0]=="X"&&align[1]=="X"&&align[2]=="X")
          {
    document.getElementById("result").innerHTML="You Won";
    document.getElementById("again").hidden=false;
          }
          else if(align[3]=="X"&&align[4]=="X"&&align[5]=="X")
          {
          document.getElementById("result").innerHTML="You Won";
          document.getElementById("again").hidden=false;
          }
          else if(align[6]=="X"&&align[7]=="X"&&align[8]=="X")
          {
              document.getElementById("result").innerHTML="You Won";
              document.getElementById("again").hidden=false;
          }
          else if(align[0]=="X"&&align[3]=="X"&&align[6]=="X")
          {
              document.getElementById("result").innerHTML="You Won";
              document.getElementById("again").hidden=false;
          }
          else if(align[1]=="X"&&align[4]=="X"&&align[7]=="X")
          {
              document.getElementById("result").innerHTML="You Won";
              document.getElementById("again").hidden=false;
          }
          else if(align[2]=="X"&&align[5]=="X"&&align[8]=="X")
          {
              document.getElementById("result").innerHTML="You Won";
              document.getElementById("again").hidden=false;
          }
          else if(align[0]=="X"&&align[4]=="X"&&align[8]=="X")
          {
              document.getElementById("result").innerHTML="You Won";
              document.getElementById("again").hidden=false;
          }
          else if(align[2]=="X"&&align[4]=="X"&&align[6]=="X")
          {
              document.getElementById("result").innerHTML="You Won";
              document.getElementById("again").hidden=false;
          }
          else{
            window.setTimeout(add,1000);
            }
            }
            else{
 document.getElementById("result2").innerHTML ="Please press Vacant Box";
            }
             }
             
             
             
             function add(){
        const arr=['1','2','3','4','5','6','7','8','9'];
        var x=Math.floor(Math.random()*10);
        
        if(x==9){
            x=8;
        }
        if(filled[x]==null){
               var el=document.getElementById(arr[x]);
             el.innerHTML='O';
             filled[x]=x;
             align[x]="O";
        
         for(var x=1;x<=9;x++){ 
          document.getElementById(x).style.pointerEvents = 'auto';
          }
          
            

document.getElementById("you").style.animation = "twin 2s linear infinite";
document.getElementById("bot").style.animation = "none";
document.getElementById("status").innerHTML="Your Turn";


 if(align[0]=="O"&&align[1]=="O"&&align[2]=="O")
          {
           document.getElementById("result2").innerHTML="You Loose";
           
           document.getElementById("again").hidden=false;
          }
          else if(align[3]=="O"&&align[4]=="O"&&align[5]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else if(align[6]=="O"&&align[7]=="O"&&align[8]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else if(align[0]=="O"&&align[3]=="O"&&align[6]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else if(align[1]=="O"&&align[4]=="O"&&align[7]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else if(align[2]=="O"&&align[5]=="O"&&align[8]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else if(align[0]=="O"&&align[4]=="O"&&align[8]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else if(align[2]=="O"&&align[4]=="O"&&align[6]=="O")
          {
              document.getElementById("result2").innerHTML="You Loose";
              document.getElementById("again").hidden=false;
          }
          else{}
          }
          else{
             
             
             add();
             
             }
             }
             function start(){
             for(var x=1;x<=9;x++){ 
          document.getElementById(x).style.pointerEvents = 'auto';
          }
             
         for(var i=0;i<=8;i++)
         {
             
       document.getElementById(i+1).innerHTML="";
       
        document.getElementById("result").innerHTML="Click on any box to start";
       document.getElementById("again").hidden=true;
             filled[i]=null;
             align[i]=null;
         }
         document.getElementById("status").innerHTML="";
                 
             }
             
         
