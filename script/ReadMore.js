function toggleContent() {
    const content = document.getElementById("additional-content");
    const button = document.getElementById("read-more-btn");
    
    if (content.style.display === "none") {
        content.style.display = "block"; 
        button.innerText = "Hide"; 
    } else {
        content.style.display = "none";
        button.innerText = "Read More"; 
    }
}
