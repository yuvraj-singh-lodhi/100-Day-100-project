var circle = document.getElementById("circle")
var up = document.getElementById("upBtn")
var down = document.getElementById("downBtn")

var rotateValue= circle.style.transform;
var rotateSum;

up.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
down.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}