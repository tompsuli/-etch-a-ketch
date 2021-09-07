const container = document.querySelector("#grid-container");
const btnReset = document.querySelector("#reset");
const btnEraser = document.querySelector("#eraser");
const btnRandom = document.querySelector("#random");

let colorPicker = document.querySelector("#color-picker")
let colorPickerWrapper = document.querySelector("#color-picker-wrapper");
let gridSize = document.querySelector("#grid-size");
let newSize = document.querySelector("#size-slider");

let colorMode = "default";

colorPicker.addEventListener("click", function () {
    colorMode = "default";
});

colorPicker.onchange = function() {
    colorPickerWrapper.style.backgroundColor = colorPicker.value;
}

btnEraser.addEventListener("click", function () {
    colorMode = "eraser";
});

btnRandom.addEventListener("click", function() {
    colorMode = "random";
});

newSize.addEventListener("input", function () {
    gridSize.textContent = newSize.value + " x " + newSize.value;
});

btnReset.addEventListener("click", function () {
    resetGrid();
});

function changeColor(e) {
    if (colorMode === "default") {
        e.target.style.backgroundColor = colorPicker.value;
    } else if (colorMode === "random") {
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else if (colorMode === "eraser") {
        e.target.style.backgroundColor = "#ffffff";
    }
}

function resetGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(newSize.value)
}

function createGrid(rows) {
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows*rows; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseover", changeColor)
        container.appendChild(cell);
    }
}

createGrid(newSize.value)