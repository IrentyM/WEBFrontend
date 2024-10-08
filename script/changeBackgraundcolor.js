const colors = ["#0000CD", "#778899", "#2F4F4F", "##008080", "#40E0D0"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
