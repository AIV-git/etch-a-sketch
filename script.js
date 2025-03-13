let gridContainer = document.querySelector(".container");
let btnContainer = document.querySelector(".btn-container");
let squaresButton = document.createElement("button");
let opacity = 0;

function defaultGrid(size) {
    gridContainer.innerHTML = "";
    const gridSize = (100/size) + "%";

    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement("div");
        grid.classList.add("item");
        grid.style.flexBasis = gridSize;
        
        var randomColor = Math.floor(Math.random()*16777215).toString(16)
        let rgbValue = "#" + randomColor;

        // Generate random color with increasing opacity as mouse goes over div
        grid.addEventListener("mouseover", (e) => {
            opacity += 0.1;
            grid.style.opacity = opacity;
            grid.style.backgroundColor = rgbValue;
        });

        gridContainer.appendChild(grid);

        // Color fades out after mouse leaves div 
        grid.addEventListener("mouseleave", (e) => {
            let milliseconds = 2;
            setTimeout(function(){
                grid.style.backgroundColor = "white";
            },milliseconds*1000);

        });
    }
}

defaultGrid(16);

squaresButton.textContent = "Grid change";
btnContainer.appendChild(squaresButton);

squaresButton.addEventListener("click", () => {
    let gridValue = false;
    while (true) {
        let newGridValue = Number(prompt("Enter your new grid value: "));
        if (newGridValue > 0 && newGridValue <= 100) {
            return defaultGrid(newGridValue);
            break;
        } else {
            alert("Enter a valid grid range.");
        }
    }
});