const container = document.getElementById("container");
const button = document.getElementById("button");
var height = 1000;
const grid = [];
const stylesheet = document.styleSheets[0];

function generateGrid(input) {
    height = 1000 / input;
    for (let i = 0; i < input * input; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        stylesheet.cssRules[0].style.height = height;
        stylesheet.cssRules[1].style.width = height;
        container.appendChild(box);
    }
}

button.addEventListener("click", function () {
    generateGrid(prompt("enter number"));
});

generateGrid(16);