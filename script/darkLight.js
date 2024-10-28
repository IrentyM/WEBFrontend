const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');


if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}
body.classList.add(localStorage.getItem('theme') + '-theme');

themeToggleButton.addEventListener('click', () => {
    const audio = new Audio('script/sound.wav'); 
    audio.play();


    themeIcon.classList.add('rotate');


    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }


    setTimeout(() => {
        themeIcon.classList.remove('rotate');
    }, 500); 
});
