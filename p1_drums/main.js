const drum1 = document.getElementById("A")
const drum2 = document.getElementById("S")
const drum3 = document.getElementById("D")
const drum4 = document.getElementById("F")
const drum5 = document.getElementById("G")
const drum6 = document.getElementById("H")
const drum7 = document.getElementById("I")

const click1 = () => {
    console.log("soso")
    drum1.style.backgroundColor = "gray"
    var audio = new Audio('1.wav');
    audio.play();
}
const click2 = () => {
    console.log("soso")
    drum2.style.backgroundColor = "gray"
    var audio = new Audio('2.wav');
    audio.play();
}
const click3 = () => {
    console.log("soso")
    drum3.style.backgroundColor = "gray"
    var audio = new Audio('3.wav');
    audio.play();
}
const click4 = () => {
    console.log("soso")
    drum4.style.backgroundColor = "gray"
    var audio = new Audio('4.wav');
    audio.play();
}
const click5 = () => {
    console.log("soso")
    drum5.style.backgroundColor = "gray"
    var audio = new Audio('5.wav');
    audio.play();
}
const click6 = () => {
    console.log("soso")
    drum6.style.backgroundColor = "gray"
    var audio = new Audio('6.wav');
    audio.play();
}
const click7 = () => {
    console.log("soso")
    drum7.style.backgroundColor = "gray"
    var audio = new Audio('7.wav');
    audio.play();
}

drum1.addEventListener("click", click1)
drum2.addEventListener("click", click2)
drum3.addEventListener("click", click3)
drum4.addEventListener("click", click4)
drum5.addEventListener("click", click5)
drum6.addEventListener("click", click6)
drum7.addEventListener("click", click7)