const colors = ["rgb(3,57,97)", "#33FF57", "#3357FF", "#F5FF33", "#FF33A8"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
