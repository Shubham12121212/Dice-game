
function rollDice(){
var x = (Math.round(Math.random()*10))%6 + 1;
var y = "images/dice"+x+".png";
var z = (Math.round(Math.random()*10))%6 + 1;
var w = "images/dice"+z+".png";
if(x>z){
  document.querySelector("h1").innerHTML =" Player 1 winner ⛳";
}
if(z>x){
  document.querySelector("h1").innerHTML =" Player 2 winner ⛳";
}
if(z===x){
  document.querySelector("h1").innerHTML =" Game Draw 🥱🥱";
}
document.querySelector(".img1").setAttribute("src",y);
document.querySelector(".img2").setAttribute("src",w);}
