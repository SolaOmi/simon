// Constants
var boxFlash = 1000;

// Boxes
var yellowBox = document.getElementById("yellow");
var blueBox = document.getElementById("blue");
var redBox = document.getElementById("red");
var greenBox = document.getElementById("green");

// Sounds
var yellowSound = document.getElementById("yellowSound");
var blueSound = document.getElementById("blueSound");
var redSound = document.getElementById("redSound");
var greenSound = document.getElementById("greenSound");

// Colors
var yellow = "rgb(155,155,0)";
var blue = "rgb(0,0,155)";
var red = "rgb(155,0,0)";
var green = "rgb(0,155,0)";
var brightYellow = "rgb(255,255,0)";
var brightBlue = "rgb(0,0,255)";
var brightRed = "rgb(255,0,0)";
var brightGreen = "rgb(0,255,0)";

// Flash colors to Brigher version, play sound, then go back to original color
function flashYellow() {
    yellowBox.style.backgroundColor = brightYellow;
    yellowSound.play();
    setTimeout(function() {
        yellowBox.style.backgroundColor = yellow;
    }, boxFlash);
};

function flashBlue() {
    blueBox.style.backgroundColor = brightBlue;
    blueSound.play();
    setTimeout(function() {
        blueBox.style.backgroundColor = blue;
    }, boxFlash);
};

function flashRed() {
    redBox.style.backgroundColor = brightRed;
    redSound.play();
    setTimeout(function() {
        redBox.style.backgroundColor = red;
    }, boxFlash);
};

function flashGreen() {
    greenBox.style.backgroundColor = brightGreen;
    greenSound.play();
    setTimeout(function() {
        greenBox.style.backgroundColor = green;
    }, boxFlash);
};

yellowBox.addEventListener("click", flashYellow);
blueBox.addEventListener("click", flashBlue);
redBox.addEventListener("click", flashRed);
greenBox.addEventListener("click", flashGreen);
