let dimensions = 16 * 16;
let gridContainer = document.querySelector(".container");

for (let i = 0; i < dimensions; i++) {
    let grid = document.createElement("div");
    grid.innerText = i + 1;
    gridContainer.appendChild(grid).className = "item";
    
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    let rgbValue = "#" + randomColor;

    grid.addEventListener("mouseover", (e) => {
        grid.style.backgroundColor = rgbValue;
    });
};

let buttonContainer = document.querySelector(".btn-container");
let squaresButton = document.createElement("button");
squaresButton.textContent = "Grid change";
buttonContainer.appendChild(squaresButton).className = "btn";