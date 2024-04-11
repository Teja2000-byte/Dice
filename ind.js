
let dice1="https://i.pinimg.com/736x/f4/50/21/f450216324990b23295ee972465f1cfc.jpg"
let dice2="https://static.thenounproject.com/png/1194703-200.png";
let dice3="https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624_1280.png";
let dice4="https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg";
let dice5="https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622_1280.png";
let dice6="https://static.thenounproject.com/png/1194706-200.png";

var random=Math.floor(Math.random()*6)+1;

if(random==1){

   document.querySelectorAll("img")[0].setAttribute("src",dice1);
}

else if(random==2){
    document.querySelectorAll("img")[0].setAttribute("src",dice2);
}

else if(random==3){
    document.querySelectorAll("img")[0].setAttribute("src",dice3);
}
else if(random==4){
    document.querySelectorAll("img")[0].setAttribute("src",dice4);
}
else if(random==5){
    document.querySelectorAll("img")[0].setAttribute("src",dice5);
}
else if(random==6){
    document.querySelectorAll("img")[0].setAttribute("src",dice6);
}
var random2=Math.floor(Math.random()*6)+1;

if(random2==1){

   document.querySelectorAll("img")[1].setAttribute("src",dice1);
}

else if(random2==2){
    document.querySelectorAll("img")[1].setAttribute("src",dice2);
}

else if(random2==3){
    document.querySelectorAll("img")[1].setAttribute("src",dice3);
}
else if(random2==4){
    document.querySelectorAll("img")[1].setAttribute("src",dice4);
}
else if(random2==5){
    document.querySelectorAll("img")[1].setAttribute("src",dice5);
}
else if(random2==6){
    document.querySelectorAll("img")[1].setAttribute("src",dice6);
}
if(random>random2)
{
    document.querySelectorAll("h1")[0].innerHTML="⛳️Player1 win";
}
else if(random<random2)
{
    document.querySelectorAll("h1")[0].innerHTML="Player2 win⛳️";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Draw";
}