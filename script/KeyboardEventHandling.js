const menuItems = document.querySelectorAll('.nav-link, .btn');
let currentIndex = 0;

menuItems[currentIndex].focus();

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % menuItems.length;
        menuItems[currentIndex].focus();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; 
        menuItems[currentIndex].focus();
    }   
});