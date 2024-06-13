const grid = [...Array(16)].map(e => Array(16));
const container = document.getElementById("container");
const button = document.getElementById("button");
var height = 1000;

function generateGrid(input) {
    height = 1000 / input;
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            grid[i][j] = document.createElement("div");
            grid[i][j].style.backgroundColor = "grey";
            grid.setAttribute("style")
            grid[i][j].addEventListener("mouseover", function () {
                grid[i][j].style.backgroundColor = "black";
            });
            container.appendChild(grid[i][j]);
        }
    }
}

button.addEventListener("click", function () {
    generateGrid(prompt("enter number"));
});

generateGrid(16);