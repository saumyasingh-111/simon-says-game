let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function levelup(){
    userseq=[];
level++; 
h2.innerText=`Level ${level}`;
let ranidx=Math.floor(Math.random()*3);
let rancolor=btns[ranidx];
let ranbtn=document.querySelector(`.${rancolor}`);
gameseq.push(rancolor);
gameflash(ranbtn);
console.log(gameseq);
}
function checkans(idx){

if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
    }
}else{
    h2.innerHTML=`Game Over! Your score was <b>${level-1}</b><br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },250);
    reset();
}
}
function btnpress(){
    let btn=this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}
 let allbtns =document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress)
 }
 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}