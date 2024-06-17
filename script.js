const container = document.getElementById("container");
const button = document.getElementById("button");
var height;
const grid = [];
const stylesheet = document.styleSheets[0];

function generateGrid(input) {
    height = 1000 / input;
    for (let i = 0; i < input * input; i++) {
        grid[i] = document.createElement("div");
        grid[i].style.cssText = "height: " + height + "px;" + "width: " + height + "px;" + "background-color: lightgrey;";
        container.appendChild(grid[i]);
        grid[i].addEventListener("mouseover", function () {
            changeColor(i)
        });
    }
}

function changeColor(index) {
    grid[index].style.backgroundColor = "black";
}
button.addEventListener("click", function () {
    for (let j = 0; j < grid.length; j++) {
        grid[j].remove();
    }
    grid.length = 0;
    generateGrid(prompt("enter number"));
});

generateGrid(16);