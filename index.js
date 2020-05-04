// Function using Click as trigger

function myFunction(){
var diceImage=["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
var randomNumber1=Math.floor(Math.random()*6);
document.querySelector("img.img1").setAttribute("src",diceImage[randomNumber1]);
var randomNumber2=Math.floor(Math.random()*6);
document.querySelector("img.img2").setAttribute("src",diceImage[randomNumber2]);

if (randomNumber1==randomNumber2){
  document.querySelector(".container h1").innerHTML = "Draw!";
}else if (randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}else{
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
}



// Function using page Refresh

// var diceImage=["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
// var randomNumber1=Math.floor(Math.random()*6);
// document.querySelector("img.img1").setAttribute("src",diceImage[randomNumber1]);
// var randomNumber2=Math.floor(Math.random()*6);
// document.querySelector("img.img2").setAttribute("src",diceImage[randomNumber2]);
//
// if (randomNumber1==randomNumber2){
//   document.querySelector(".container h1").innerHTML = "Draw!";
// }else if (randomNumber1>randomNumber2){
//   document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
// }else{
//   document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
// }
