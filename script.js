let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");
choices.forEach((choice) => 

{
    choice.addEventListener("click",() => {
        console.log("choice was clicked");
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);



});
});
const playgame =(userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice === compchoice)
    {
    drawgame();
    }
   else
   {
    let userwin=true;
    if(userchoice ==="rock")
    {
    userwin=compchoice==="paper"?false:true;
    }
   else if(userchoice ==="paper")
   {
   userwin=compchoice==="scissor"?false:true;
   }
   else
   {
   userwin=compchoice==="rock"?false:true;
   }

   
   showwinner(userwin,userchoice,compchoice);
}

};
const showwinner=(userwin,userchoice,compchoice) =>
{
    if(userwin)
    {
        
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win`;
        msg.style.backgroundColor="green";
    }
    else{
        
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lose`;
        msg.style.backgroundColor="red";
    }
};
 const gencompchoice =() => {
    const options= ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
 };
 const  drawgame =() =>

 {
     msg.innerText="game was draw ,play again!";
     msg.style.backgroundColor="#081b31";
 }




     

