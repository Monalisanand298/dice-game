
var randomn1 = Math.floor(Math.random()*6 + 1 );
var randomimg1 = "/images/dice"+ randomn1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimg1);

var randomn2 = Math.floor(Math.random()*6 + 1 );
var randomimg2 = "/images/dice"+ randomn2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(randomn1 > randomn2){
    document.querySelector("h1").innerHTML = "1 wins";
}

else if(randomn1 < randomn2){
    document.querySelector("h1").innerHTML = "2 wins";}
else{
    document.querySelector("h1").innerHTML = "draw";
} 



