var startBtn = document.getElementById("Btn");
var stopBtn = document.getElementById("Btn2");
var bounce = document.getElementsByClassName("bounce");
var music = document.getElementById("audio");
function stopShake() {
    startBtn.style.animation = "none";
}
function startShake() {
    startBtn.style.animation = "shake 1s linear infinite";

}
function control() {
    document.getElementById("b1").style.animation = "length 3s linear 3s infinite";
    document.getElementById("b5").style.animation = "length 3s linear 1s infinite";
    document.getElementById("b7").style.animation = "length 3s linear infinite";
    document.getElementById("b9").style.animation = "length 3s linear 1s infinite";
    document.getElementById("b11").style.animation = "length 3s linear 2s infinite";
    document.getElementById("b13").style.animation = "length 3s linear 3s infinite";
    document.getElementById("b3").style.animation = "length 3s linear 2s infinite";
    document.getElementById("b2").style.animation = "length 3s linear 2.5s infinite";
    document.getElementById("b4").style.animation = "length 3s linear 1.5s infinite";
    document.getElementById("b6").style.animation = "length 3s linear .5s infinite";
    document.getElementById("b8").style.animation = "length 3s linear .5s infinite";
    document.getElementById("b10").style.animation = "length 3s linear 1.5s infinite";
    document.getElementById("b12").style.animation = "length 3s linear 2.5s infinite";
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
    music.play();
}
function control2() {
    document.getElementById("b1").style.animation = "none";
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
    startBtn.style.animation = "shake 1s linear infinite";
    document.getElementById("b1").style.animation = "none";
    document.getElementById("b5").style.animation = "none";
    document.getElementById("b7").style.animation = "none";
    document.getElementById("b9").style.animation = "none";
    document.getElementById("b11").style.animation = "none";
    document.getElementById("b13").style.animation = "none";
    document.getElementById("b3").style.animation = "none";
    document.getElementById("b2").style.animation = "none";
    document.getElementById("b4").style.animation = "none";
    document.getElementById("b6").style.animation = "none";
    document.getElementById("b8").style.animation = "none";
    document.getElementById("b10").style.animation = "none";
    document.getElementById("b12").style.animation = "none";
    music.pause();
}