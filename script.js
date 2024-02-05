
let title = document.querySelector(".title");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-three");
let buttonFour = document.querySelector(".option-four");
let buttonFive = document.querySelector(".option-five");
let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let screen3 = document.querySelector(".option-one-end");
let screen4 = document.querySelector(".option-two-end");
let opening = document.querySelector(".story-opening");
let body = document.querySelector("body");


buttonOne.onclick = function() {
    opening.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    screen1.style.display = "block";
    title.innerHTML = "";
};


buttonTwo.onclick = function() {
    opening.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    screen2.style.display = "block";
    title.innerHTML = "";

};
buttonThree.onclick = function() {
    screen4.style.display = "block";
    screen2.style.display = "none";
    screen1.style.display = "none";


};
buttonFour.onclick = function() {
    screen3.style.display = "block";
    screen1.style.display = "none";
};

buttonFive.onclick = function() {
    buttonThree.style.display = "block";
    screen1.style.display = "none";
    opening.style.display = "block";
    screen3.style.display = "none";
    buttonOne.style.display = "block";
    buttonTwo.style.display = "block";

};