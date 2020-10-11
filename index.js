var randNum1 = Math.floor(Math.random()*6) + 1;
var randNum2 = Math.floor(Math.random()*6) + 1;

var randLink1 = "images/dice" + randNum1 + ".png";
var randLink2 = "images/dice" + randNum2 + ".png";
// alert(randLink1 + "  and " + randLink2);

var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];

image1.setAttribute("src", randLink1);
image2.setAttribute("src", randLink2);

if(randNum1 > randNum2){
  document.querySelector('h1').textContent = "Player 1 You win!";
}
else if(randNum1 < randNum2){
  document.querySelector('h1').textContent = "Player 2 You win!";
}
else{
  document.querySelector('h1').textContent = "Draw Occur!";
}
